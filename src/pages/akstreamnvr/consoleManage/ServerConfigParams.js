import React, { useState, useEffect } from 'react'
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import { List, Spin } from "antd";

export default (props) => {

    const { data } = props;

    // const forceUpdate = useForceUpdate();
    // const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    // const secret = `${window._env_.ZlMediaKit_Secret}`;
    // const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥

    const [serverConfigParams, setServerConfigParams] = useState(data);
    const [serverConfigParamsLoading, setServerConfigParamsLoading] = useState(false);

    useDidMount(_ => {
        // loadServerConfigParams();
    })

    // const loadServerConfigParams = () => {
    //     setServerConfigParamsLoading(true)
    //     const apiPath = '/index/api/getServerConfig'

    //     promiseAjax(apiDomin+apiPath, {secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
    //     .then(res => {
    //         console.log('res == ',res)
    //     })
    //     .finally(_=>{
    //         setServerConfigParamsLoading(false)
    //     })

    // }

    const formatData = (data) => {
        if (data) {
            return Object.entries(data);
        }
        return []
    }

    return (
        <div style={{height: '750px'}}>
            <Spin spinning={serverConfigParamsLoading}>
                <List
                    size="small"
                    header={null}
                    footer={<div style={{height: '10px'}}></div>}
                    bordered
                    dataSource={formatData(serverConfigParams)}
                    renderItem={([pName, pVal]) => {
                        return (
                            <List.Item className={"servier-config-param-list-item"}>
                                <div>{pName}</div>
                                <div>{pVal}</div>
                            </List.Item>
                        )
                    }}
                />
            </Spin>
        </div>

    )

}