import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import {message, Table,Tag, Divider, Spin} from "antd";
import promiseAjax from '@/utils/promiseAjax';

export default forwardRef((props, ref) => {

    const { } = props;

    const forceUpdate = useForceUpdate();
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    const [ mediaServer, setMediaServer ] = useState([]);
    const [ mediaServerLoading, setMediaServerLoading ] = useState(false);
    

    useDidMount(_=>{
        loadMediaServerData();
    })

    //回调
    useImperativeHandle(ref,
    () => {
      return {
        loadMediaServerData: loadMediaServerData
      }
    })

    const loadMediaServerData = () => {
        setMediaServerLoading(true)
        const apiPath = '/MediaServer/GetMediaServerList'

        promiseAjax(apiAKStream+apiPath, {secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
            .then(res => {
                if(res.code === 200) {
                    setMediaServer(res.data)
                    forceUpdate()
                }else{
                    console.error('获取楼媒体服务列表异常 == ', res)
                }
            })
            .finally(_=>{
                setMediaServerLoading(false)
            })

    }

    const startMediaServer = (record) => {

        const apiPath = '/AKStreamKeeper/StartMediaServer';

        promiseAjax(apiAKStream+apiPath, { mediaServerId: record.mediaServerId, secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
            .then(res => {
                if (res.code === 200) {
                    // message.info(`启动 -> ${record.data.mediaServerId} -> 成功!`);
                    message.info(`启动 -> 成功!`);
                    loadMediaServerData();
                }
            })
    }

    const stopMediaServer = (record) => {

        const apiPath = '/AKStreamKeeper/ShutdownMediaServer';

        promiseAjax(apiAKStream+apiPath, { mediaServerId: record.mediaServerId, secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
            .then(res => {
                if (res.code === 200) {
                    // message.info(`停止 -> ${record.data.mediaServerId} -> 成功!`);
                    message.info(`停止 -> 成功!`);
                    loadMediaServerData();
                }
            })
    }

    const restartMediaServer = (record) => {

        const apiPath = '/AKStreamKeeper/RestartMediaServer';

        promiseAjax(apiAKStream+apiPath, { mediaServerId: record.mediaServerId, secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
            .then(res => {
                if (res.code === 200) {
                    // message.info(`重启 -> ${record.data.mediaServerId} -> 成功!`);
                    message.info(`重启 -> 成功!`);
                    loadMediaServerData();
                }
            })

    }

    return (
        <Spin spinning={mediaServerLoading}>
            <Table columns={[
                {
                    title: '服务IP',
                    dataIndex: 'ipV4Address',
                },
                {
                    title: '流媒体ID',
                    dataIndex: 'mediaServerId',
                },
                {
                    title: 'AKStreamKeeper服务',
                    dataIndex: 'isKeeperRunning',
                    render: (text, record) => {
                        return text ? <Tag color='geekblue'>运行中</Tag> : <Tag color='volcano'>未运行</Tag>
                    }
                },
                {
                    title: 'ZLMediaKit服务',
                    dataIndex: 'isMediaServerRunning',
                    render: (text, record) => {
                        return text ? <Tag color='geekblue'>运行中</Tag> : <Tag color='volcano'>未运行</Tag>
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 360,
                    render: (text, record) => (
                        <span>
                            <a href="#" onClick={()=>startMediaServer(record)}>启动</a>
                            <Divider type="vertical" />
                            <a href="#" onClick={()=>stopMediaServer(record)}>停止</a>
                            <Divider type="vertical" />
                            <a href="#" onClick={()=>restartMediaServer(record)}>重启</a>
                        </span>
                    )
                },
            ]} dataSource={mediaServer} size="small"/>
        </Spin>
    )

})