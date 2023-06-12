import React, { useState, useRef } from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import {Button, Table, Tag, Modal, Spin, message, Divider} from "antd";

import FromModal from './modal';
import PlayFormModal from './modal/playForm';

import './index.less';

export default function Index () {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: 'AKStreamNVR', path: '/akstreamnvr' },
        { title: '设备管理' },
    ]);

    const createCnuterRef = useRef(); //创建
    const editCnuterRef = useRef(); //编辑
    const activeCnuterRef = useRef(); //激活
    const playCnuterRef = useRef(); //播放
    const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥

    const [ data, setData] = useState([]);
    const [ channelData, setChannelData] = useState({});
    const [ page, setPage ] = useState(1);
    const [ dataTotal, setDataTotal ] = useState(0);
    const [ pageSize, setPageSize ] = useState(9999);
    const [ loading, setLoading] = useState(false);

    const [ modalVisible, setModalVisible] = useState(false);

    

    useDidMount(_ => {
        loadChanelsData();
    })

    //获取设备列表
    const loadChanelsData = (params) => {
        setLoading(true)
        const apiPath = '/MediaServer/GetVideoChannelList'
        const query = {
            secret:secret, 
            pageIndex:page,
            pageSize: pageSize,
			orderBy: [
			    {
			        fieldName: "mediaServerId",
			        orderByDir: 0
			    }
			],
            ...params?params:{}
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
        .then(res => {
            if(res.code === 200){
                setData(res.data.videoChannelList)
                setPage(res.data.request.pageIndex)
                setDataTotal(res.data.request.total)
                setPageSize(res.data.request.pageSize)
            }else{
                console.error('获取设备列表异常 = ', res)
            }
        })
        .finally(_=>{
            setLoading(false)
        })
    }

    //添加设备
    const createVideoChannel = (data) => {
        const apiPath = '/MediaServer/AddVideoChannel';
        const query = {
            ...data
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
        .then(res => {
            if (res.code === 200 && res.data.id && res.data.id > 0) {
                message.info("添加设备成功!");
                createCnuterRef.current.onClose();
                loadChanelsData();
            } else {
                message.error(res.Message);
            }
        })
        .finally(_=>{
        })
    }

    //编辑设备
    const editVideoChannel = (data) => {

        const apiPath = '/MediaServer/ModifyVideoChannel?mainId='+channelData.mainId;
        const query = {
            ...data
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
        .then(res => {
            if (res.code === 200) {
                message.info("编辑设备成功!");
                editCnuterRef.current.onClose();
                loadChanelsData();
            } else {
                message.error(res.Message);
            }
        })
        .finally(_=>{
        })
    }

    //激活设备
    const activeVideoChannel = (channelData) => {
        const apiPath = '/MediaServer/ActiveVideoChannel?mainId='+channelData.mainId;
        const query = {
            ...data
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
        .then(res => {
            if (res.code === 200) {
                message.info("激活设备成功!");
                activeCnuterRef.current.onClose();
                loadChanelsData();
            } else {
                message.error(res.Message);
            }
        })
        .finally(_=>{
        })
    }
    
    // 结束推流
    const getStreamStop = (channel) => {
        const apiPath = '/MediaServer/StreamStop';
        const query = {
            mediaServerId: channel.mediaServerId,
            mainId: channel.mainId,
            secret
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {
            if (res.code === 200) {
                message.info("结束推流成功!");
                loadChanelsData();
            } else {
                message.error(res.Message);
            }
        })
    }
	

    //激活
	const activeVideoRecord = (channelData) => {
        setChannelData(channelData)
	    activeCnuterRef.current.onShow(channelData)
	}

    //编辑
	const editVideoRecord = (channelData) => {
        setChannelData(channelData)
	    editCnuterRef.current.onShow(channelData)
	}

    //添加
    const showCreateModal = () => {
        createCnuterRef.current.onShow();
    };

    //
    const onRequest = (data, mode) => {
        console.log(mode)
        if(mode === 'create'){
            createVideoChannel(data)
        }else if(mode === 'edit'){
            editVideoChannel(data)
        }else if(mode === 'active'){
            activeVideoChannel(data)
        }
    }

    //播放视频
    const getStreamLive = (channel) => {
        playCnuterRef.current.onShow(channel)        
    }

    return (
        <Spin spinning={loading}>
            <div style={{width: '100%', display: "flex", padding: "10px", backgroundColor: 'white' }}>
                <Button icon={"plus"} type="primary" onClick={() => showCreateModal()}>
                    添加设备
                </Button>
            </div>

            <Table className={"device-table"}
                columns={[
                    {
                        title: '设备编号',
                        dataIndex: 'mainId',
                        key: 'mainId',
                        width: 160
                    },
                    {
                        title: '设备名称',
                        dataIndex: 'channelName',
                        key: 'channelName',
                        width: 160
                    },
                    {
                        title: '设备类型',
                        dataIndex: 'videoDeviceType',
                        key: 'videoDeviceType',
                        width: 160
                    },
                    {
                        title: '流媒体服务器',
                        dataIndex: 'mediaServerId',
                        key: 'mediaServerId',
                        width: 160
                    },
                    {
                        title: '接入类型',
                        dataIndex: 'deviceStreamType',
                        key: 'deviceStreamType',
                        width: 160
                    },
                    {
                        title: '网络类型',
                        dataIndex: 'deviceNetworkType',
                        key: 'deviceNetworkType',
                        width: 160
                    },
                    {
                        title: 'ipV4地址',
                        dataIndex: 'ipV4Address',
                        key: 'ipV4Address',
                        width: 160
                    },
                    {
                        title: '推拉流方式',
                        dataIndex: 'methodByGetStream',
                        key: 'methodByGetStream',
                        width: 160
                    },
                    {
                        title: '自动推流',
                        dataIndex: 'autoVideo',
                        key: 'autoVideo',
                        width: 160,
                        render: (text) => (
                            <span>
                                {
                                    text ? <Tag color='geekblue'>开启</Tag> : <Tag color='volcano'>关闭</Tag>
                                }
                            </span>
                        ),
                    },
                    {
                        title: '通道ID',
                        dataIndex: 'channelId',
                        key: 'channelId',
                        width: 200
                    },
                    {
                        title: '设备ID',
                        dataIndex: 'deviceId',
                        key: 'deviceId',
                        width: 200
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 350,
                        fixed: 'right',
                        render: (text, record) => (
                            <span>
                                {
                                    record.mediaServerId && record.mediaServerId.indexOf('unknown_server') ? <a href="#" onClick={()=>editVideoRecord(record)}>编辑</a> : <a href="#" onClick={()=>activeVideoRecord(record)}><font color='red'>激活</font></a>
                                }	
                                <Divider type="vertical" />
                                {
                                    record.mediaServerId && record.mediaServerId.indexOf('unknown_server') ? <a href="#" onClick={()=>getStreamLive(record)}>播放</a> : ""
                                }
                                <Divider type="vertical" />
                                {
                                    record.mediaServerId && record.mediaServerId.indexOf('unknown_server') ? <a href="#" onClick={()=>getStreamStop(record)}>结束推流</a> : ""
                                }  
                                {/* <Divider type="vertical" />
                                {
                                    record.mediaServerId && record.mediaServerId.indexOf('unknown_server') ? <a href="#" onClick={()=>getStartRecord(record)}>录制文件</a> : ""
                                }  
                                <Divider type="vertical" />
                                {
                                    record.mediaServerId && record.mediaServerId.indexOf('unknown_server') ? <a href="#" onClick={()=>getStopRecord(record)}>暂停录制</a> : ""
                                }   */}
                            </span>
                        ),
                    },
                ]}
                dataSource={data}
                pagination={{
                    onChange: page => {
                        loadChanelsData({
                            page: page,
                        })
                    },
                    current: page,
                    showQuickJumper: true,
                    total: dataTotal,
                    pageSize: pageSize,
                }}
                scroll={{ x: 'calc(1320px + 50%)' }}
            />    

            <FromModal ref={createCnuterRef} mode="create" onRequest={onRequest}/>

            <FromModal ref={editCnuterRef} mode="edit" onRequest={onRequest}/>

            <FromModal ref={activeCnuterRef} mode="active" onRequest={onRequest}/>

            <PlayFormModal ref={playCnuterRef}/>
       
        </Spin>
    );
}