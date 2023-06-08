
import React, { useState, useEffect, useRef } from 'react'
import useBreadcrumb from '@/framework/useBreadcrumb';
import { Button, Card, Col, message, Modal, Row, Drawer } from "antd";
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import moment from "moment";
import ThreadLoadRateCharts from './ThreadLoadRateCharts'
import ThreadDelayCharts from './ThreadDelayCharts';
import MediaServer from './MediaServer';
import ServerTcpSessions from './ServerTcpSessions';
import ServerConfigParams from './ServerConfigParams';

import { ReloadSvg } from '../ctrl/svg';
import './index.less';


//初始化数据队列,确保初始化时有20个数据,值默认为0
const initChartsData = () => {
    const initTime = moment().subtract(200, 'seconds').valueOf();
    const data = [];
    for (let i = 0; i < 20; i += 1) {
        data.push({
            time: 5000 * i + initTime,
            averageLoad: 0,
            averageDelay: 0,
            detail: []
        });
    }
    return data
}


export default function () {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: 'AKStreamNVR', path: '/akstreamnvr' },
        { title: '控制台' },
    ]);

    const mediaServerCnuterRef = useRef()
    const serverTcpSessionCouterRef = useRef()
    const forceUpdate = useForceUpdate();
    const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    
    const [chartsData, setChartsData] = useState(initChartsData())
    const [ visible, setVisible ] = useState(false)
    const [ serverConfigParams, setServerConfigParams ] = useState([]);

    let loadChartsDataInterval = null;

    useDidMount(_ => {
        //每5秒钟获取一次线程负载数据
        loadChartsDataInterval = setInterval(() => {
            loadChartsData()
        }, 5000);
        loadServerConfigParams();
    })

    useWillUnmount(_ => {
        //关闭循环
        if (loadChartsDataInterval) {
            clearInterval(loadChartsDataInterval);
        }
    })

    // 获取 图表数据
    const loadChartsData = () => {
        const now = moment();
        const apiPath = '/index/api/getThreadsLoad'
        promiseAjax(apiDomin + apiPath, { secret: secret }, { method: 'GET', AccessKey: `${AccessKey}` })
            .then(res => {
                if (res.code === 0) {
                    const data = res.data;
                    const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

                    //计算多个线程的平均负载率和平均延时
                    const averageLoad = parseFloat(average(data.map(d => d.load)).toFixed(2))
                    const averageDelay = Math.floor(average(data.map(d => d.delay)))

                    const ret = {
                        time: now.valueOf(),
                        averageLoad: averageLoad,
                        averageDelay,
                        detail: res.data
                    }
                    chartsData.push(ret);
                    chartsData.shift();
                    setChartsData(chartsData);
                    forceUpdate();
                } else {
                    console.error('获取图表信息异常 = ', res)
                }

            })
    }

    //获取 ZLMedia NVR配置参数
    const loadServerConfigParams = () => {
        const apiPath = '/index/api/getServerConfig'
        promiseAjax(apiDomin+apiPath, {secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {
            if(res.code === 0){
                setServerConfigParams(res.data[0]);
            }else{
                console.error('获取ZLMedia NVR配置参数异常 = ', res)
            }
        })
        .finally(_=>{
        })

    }
    
    //刷新 流媒体服务
    const loadMediaServerDataClick = () => {
        mediaServerCnuterRef.current.loadMediaServerData()
    }

    //刷新 会话列表
    const loadServerTcpSessionsDataClick = () => {
        serverTcpSessionCouterRef.current.loadServerTcpSessionsData()
    }

    //显示 ZLMedia NVR配置参数 弹出框
    const onShow = () => {
        setVisible(true)
    }

    //关闭 ZLMedia NVR配置参数 弹出框
    const onClose = () => {
        setVisible(false)
    }

    return (
        <div>
            <div style={{display: "flex",padding: "10px",backgroundColor: "white"}}>
                <Button icon={"setting"} type="primary" ghost onClick={() => onShow()}>配置参数</Button>
                <Drawer
                    title="ZLMedia NVR配置参数"
                    width={920}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <ServerConfigParams data={serverConfigParams}/>
                </Drawer>
            </div>
            <Row gutter={24}>

                <Col span={12} style={{ marginBottom: 10 }}>
                    <Card className={"dashboard-card"} title="平均线程负载率(%)" bodyStyle={{ padding: "20px" }}>
                        <ThreadLoadRateCharts chartData={chartsData} />
                    </Card>
                </Col>
                <Col span={12} style={{ marginBottom: 10 }}>
                    <Card className={"dashboard-card"} title="线程任务执行延时(ms)" bodyStyle={{ padding: "20px" }}>
                        <ThreadDelayCharts chartData={chartsData} />
                    </Card>
                </Col>

                <Col span={24} style={{ marginBottom: 10 }}>
                    <Card className={"dashboard-card"} title="流媒体服务" headStyle={{ borderBottom: 0 }} bodyStyle={{ padding: "0px" }} extra={
                        <Button style={{ border: 0, display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => loadMediaServerDataClick()}>
                            <ReloadSvg />
                        </Button>
                    }>
                        <MediaServer ref={mediaServerCnuterRef} />
                    </Card>
                </Col>

                <Col span={24} style={{ marginBottom: 10 }}>
                    <Card className={"dashboard-card"} title="会话列表" headStyle={{ borderBottom: 0 }} bodyStyle={{ padding: "0px" }} extra={
                        <Button style={{ border: 0, display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => loadServerTcpSessionsDataClick()}>
                            <ReloadSvg />
                        </Button>
                    }>
                        <ServerTcpSessions ref={serverTcpSessionCouterRef} />
                    </Card>
                </Col>
            </Row>
        </div>

    );
}