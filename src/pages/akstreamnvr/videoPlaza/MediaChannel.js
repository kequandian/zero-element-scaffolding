import React, { useState } from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import { List, Spin } from 'antd';
import RvImage from '../ctrl/component/RvImage/RvImage';
import black from '../ctrl/style/black.png'

export default function Index (props) {

    const { mediaServerId } = props;

    const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥

    const [ chanelsData, setChanelsData] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ dataTotal, setDataTotal ] = useState(0);
    const [ pageSize, setPageSize ] = useState(9999);
    const [ loading, setLoading] = useState(false);
    

    useDidMount(_ => {
        getLoadChanelsData();
    })

    const getLoadChanelsData = () => {
        setLoading(true)
        const apiPath = '/MediaServer/GetOnlineStreamInfoList'
        const query = {
            MediaServerId: mediaServerId,
            secret:secret, 
            pageIndex:page,
            pageSize: pageSize,
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
        .then(res => {
            if(res){
                setChanelsData(res.videoChannelMediaInfo)
                setPage(res.request.pageIndex)
                setDataTotal(res.request.total)
                setPageSize(res.request.pageSize)
            }
        })
        .finally(_=>{
            setLoading(false)
        })
    }
    
    return (
        <div style={{display: "flex", flexDirection: 'column', backgroundColor: "white", minHeight: '550px'}}>
            <div style={{display: "flex", padding: "10px" }}>
                <div style={{color: '#000000a6', fontSize: '18px'}}>{mediaServerId}</div>
            </div>
            <Spin spinning={loading}>
                <List
                    className={"channel-py-list"}
                    pagination={false}
                    dataSource={chanelsData}
                    renderItem={(item) => {
                        let snapshotPath = `${apiDomin}/index/api/getSnap?secret=${secret}&timeout_sec=10&expire_sec=30&url=`;
                        if (item.vhost && item.vhost != "__defaultVhost__") {
                            snapshotPath += item.vhost;
                        }
                        console.log(snapshotPath)
                        // snapshotPath += "/"+ item.app+"/"+item.stream+".png"
                        snapshotPath += `${apiDomin}/`+item.app+"/"+item.mediaServerStreamInfo.stream+".live.flv"
                        return (
                            <List.Item className={"channel-py"}>
                                <div className={"channel-py-snap"} onClick={()=>{
                                    const w=window.open('about:blank');
                                    w.location.href= apiDomin + `/play?mediaServerIp=${item.mediaServerStreamInfo.mediaServerIp}&mediaServerId=${mediaServerId}&vhost=${item.vhost}&app=${item.app}&stream=${item.mediaServerStreamInfo.stream}`;
                                }}>
                                    <RvImage src={snapshotPath} fallbackSrc={black}/>
                                </div>
                                <div className={"channel-py-des"}>
                                    <span>[流ID]{item.mediaServerStreamInfo.stream}  [名称]{item.channelName}</span>
                                    {/*<span>在线</span>*/}
                                </div>
                            </List.Item>
                        )
                    }}
                />
            </Spin>
        </div>
    )
}