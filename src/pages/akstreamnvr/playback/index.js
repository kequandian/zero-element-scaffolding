import React, { useState, useRef } from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import { Spin, Table, Button, message } from 'antd';
import PlayBackFormModal from '../ctrl/component/modal/playBackForm';

import './index.less';

export default function Index () {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '视频管理', path: '/akstreamnvr' },
        { title: '录像回放' },
    ]);

    const playBackCnuterRef = useRef(); //播放
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    const [ data, setData] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ dataTotal, setDataTotal ] = useState(0);
    const [ pageSize, setPageSize ] = useState(10);
    const [ loading, setLoading] = useState(false);


    useDidMount(_=>{
        loadChanelsData()
    })

    //获取列表
    const loadChanelsData = (params={}) => {

        setLoading(true)
        const apiPath = '/MediaServer/GetOnlineStreamInfoList'
        const query = {
		    pageIndex: page,
		    pageSize: pageSize,
		    // active: 1,
		    ...params
        }

        promiseAjax(apiAKStream+apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
        .then(res => {
            console.log('res == ', res)
            if(res.code === 200 && JSON.stringify(res.data) != '{}'){
                setData(res.data.videoChannelMediaInfo)
                setPage(res.data.total)
                setDataTotal(res.data.request.pageIndex)
                setPageSize(res.data.request.pageSize)
            }else{
                setData([])
                setPage(0)
                setDataTotal(1)
                setPageSize(1)
            }
        })
        .finally(_=>{
            setLoading(false)
        })
    }

    //回看视频
    const viewChannelVideoRecord = (channel) => {
        playBackCnuterRef.current.onShow(channel)
        // RvModal.open({
        //     width: 1120,
        //     title: `回看: ${channel.channelName}`,
        //     footer: null,
        //     onCancel: (args) => null,
        // }, <PlaybackPlay channel={channel}/>)
    }

    //删除视频
    const deleteChannelVideoRecord = () => {
        message.info("暂未实现!!")
    }


    return (
        <Spin spinning={loading}>

            <Table className={"playback-table"}
                       columns={[
                            {
                                title: '通道名称',
                                dataIndex: 'channelName',
                                key: 'channelName',
                            },
                            {
                                title: '设备ID',
                                dataIndex: 'deviceId',
                                key: 'deviceId',
                            },
                            {
                                title: '通道ID',
                                dataIndex: 'channelId',
                                key: 'channelId',
                            },
                            {
                                title: '虚拟主机Vhost',
                                dataIndex: 'vhost',
                                key: 'vhost',
                                width: 180
                            },
                            {
                                title: '应用标识App',
                                dataIndex: 'app',
                                key: 'app',
                                width: 160
                            },
                            {
                                title: '通道标识Stream',
                                key: 'mainId',
                                dataIndex: 'mainId',
                                width: 160
                            },
                            {
                                title: '操作',
                                key: 'action',
                                width: 200,
                                render: (text, record) => (
                                    <span>
                                        <a href="#" onClick={()=>viewChannelVideoRecord(record)}>查看录像</a>
                                        {/*<Divider type="vertical"/>
                                        <a href="javascript:;" onClick={this.deleteChannelVideoRecord}>删除</a>*/}
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
                />
            <PlayBackFormModal ref={playBackCnuterRef} />
        </Spin>

    )
}