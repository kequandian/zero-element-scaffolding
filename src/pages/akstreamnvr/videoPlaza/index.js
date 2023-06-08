import React, { useState } from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import { Spin } from 'antd';

import MediaChannel from './MediaChannel';
import './index.less';

export default function Index () {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: 'AKStreamNVR', path: '/akstreamnvr' },
        { title: '视频广场' },
    ]);

    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥

    const [ data, setData ] = useState([]);
    const [ loading, setLoading] = useState(false);

    useDidMount(_ => {
        getMediaServerList();
    })

    const getMediaServerList = () =>{
        setLoading(true)
        const apiPath = '/MediaServer/GetMediaServerList'
        promiseAjax(apiAKStream+apiPath, {secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {
            console.log('res == ', res)
            if(res && Array.isArray(res)){
                setData(res)
            }
        })
        .finally(_=>{
            setLoading(false)
        })
    }
    
    return (
        <Spin spinning={loading}>
            {
                data && Array.isArray(data) && data.length > 0 && data.map((item, index) => {
                    return ( <MediaChannel mediaServerId={item.mediaServerId} key={`MediaChannel_${index}`}/>)
                })
            }
        </Spin>
    )
}