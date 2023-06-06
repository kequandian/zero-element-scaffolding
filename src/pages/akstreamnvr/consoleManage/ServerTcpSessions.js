import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import Loader from "../ctrl/component/Loader";
import {message, Table, Spin} from "antd";

export default forwardRef((props, ref) => {


    const forceUpdate = useForceUpdate();
    const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    const [ serverTcpSessions, setServerTcpSessions ] = useState([]);
    const [ serverTcpSessionsLoading, setServerTcpSessionsLoading ] = useState(false);

    useDidMount(_=>{
        loadServerTcpSessionsData();
    })

    //回调
    useImperativeHandle(ref,
    () => {
        return {
            loadServerTcpSessionsData: loadServerTcpSessionsData
        }
    })

    const loadServerTcpSessionsData = () => {
        setServerTcpSessionsLoading(true)

        const apiPath = '/index/api/getAllSession';

        promiseAjax(apiDomin+apiPath, {secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
            .then(res => {
                if(res.code === 0){
                    setServerTcpSessions(res.data);
                    forceUpdate()
                }
            })
            .finally(_=>{
                setServerTcpSessionsLoading(false)
            })

    }

    const tryKickServerTcpSession = (tcpSession) => {

        const apiPath = '/index/api/kick_session';
        
        promiseAjax(apiDomin+apiPath, {id:tcpSession.id, secret:secret}, { method: 'POST', AccessKey: `${AccessKey}` })
            .then(res => {
                if(res.code === 0){
                    message.info(`断开${tcpSession.peer_ip}:${tcpSession.peer_port} -> ${tcpSession.local_ip}:${tcpSession.local_port} 成功!`);
                    loadServerTcpSessionsData();
                }
            })

    }

    return (
        <Spin spinning={serverTcpSessionsLoading}>
            <Table columns={[
                {
                    title: '远端',
                    dataIndex: 'peer_ip',
                    render: (text, record) => {
                        return `${record.peer_ip}:${record.peer_port}`
                    }
                },
                {
                    title: '本地',
                    dataIndex: 'local_ip',
                    render: (text, record) => {
                        return `${record.local_ip}:${record.local_port}`
                    }
                },
                {
                    title: '类型',
                    dataIndex: 'typeid'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 360,
                    render: (text, record) => (
                        <span>
                            <a href="#" onClick={()=>tryKickServerTcpSession(record)}>断开</a>
                        </span>
                    ),
                },
            ]} dataSource={serverTcpSessions} size="small"/>
        </Spin>
    )

})