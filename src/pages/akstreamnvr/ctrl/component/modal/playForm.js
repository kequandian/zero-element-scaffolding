import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Input, Tabs, Icon } from "antd";
import promiseAjax from '@/utils/promiseAjax';

import './playForm.less'

export default forwardRef(function Index(props, ref) {

    const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    const [visible, setVisible] = useState(false);
    const [channelData, setChannelData] = useState({});

    const [ playUrlData, setPlayUrlData ] = useState({})

    //回调
    useImperativeHandle(ref,
        () => {
            return {
                onShow,
                onClose
            }
        });
    
    const loadChannel = (mediaServerId, mainId) => {
        const apiPath = '/MediaServer/StreamLive';
        const query = {
            mediaServerId,
            mainId,
            secret
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {
            if(res.code === 200){
                setPlayUrlData({
                    flv:res.data.playUrl[1],
                    hls:res.data.playUrl[4],
                    rtmp:res.data.playUrl[3],
                    rtsp:res.data.playUrl[2]
                });
            }else{
                console.error('获取视频信息失败 = ', res);
            }
        })
        .finally(_=>{
        })
    }

    const onShow = (data) => {
        if (data) {
            setChannelData(data)
            loadChannel(data.mediaServerId, data.mainId)
        }
        setVisible(true)
    };

    const onClose = e => {
        setVisible(false)
        setChannelData({})
        setPlayUrlData({})
    }

    return (
        <Modal
            title={`实时视频: ${channelData.channelName}`}
            visible={visible}
            onCancel={onClose}
            maskClosable={false}
            footer={null}
            width={1120}
            destroyOnClose={true}
        >
            <div className={"playForm-play-container"}>

                <div className={"playForm-play-header"}>
                    <div className={"playForm-player"}>

                        <live-player 
                            video-url={ playUrlData.flv === undefined ? `${apiDomin}/`+channelData.app+'/'+channelData.mainId+'.live.flv':playUrlData.flv}
                            live="true"
                            >
                        </live-player>

                    </div>

                </div>

                <div className={"playForm-play-bottom"}>
                    <div className={"playForm-calendar"}>
                        <Tabs>
                            <Tabs.TabPane tab="分享地址&视频源地址" key="1">
                                <div className={"zpplayer-bottom-tab-pane"}>
                                    <div>
                                        <div>分享地址：</div>
                                        <div><Input value={location.href} addonAfter={<Icon type="copy" />} /></div>
                                    </div>
                                    <div>
                                        <div>iframe：</div>
                                        <div><Input value={`<iframe src="${location.href}&iframe=yes&aspect=640x360" width="640" height="360" allowfullscreen allow="autoplay"></iframe>`} addonAfter={<Icon type="copy" />} /></div>
                                    </div>
                                    <div>
                                        <div>flv：</div>
                                        <div><Input value={playUrlData.flv} addonAfter={<Icon type="copy" />} /></div>
                                    </div>
                                    <div>
                                        <div>rtsp：</div>
                                        <div><Input value={playUrlData.rtsp == null ? null : playUrlData.rtsp.replace('http', 'rtsp')} addonAfter={<Icon type="copy" />} /></div>
                                    </div>
                                    <div>
                                        <div>rtmp：</div>
                                        <div><Input value={playUrlData.rtmp == null ? null : playUrlData.rtmp.replace('http', 'rtmp')} addonAfter={<Icon type="copy" />} /></div>
                                    </div>
                                    <div>
                                        <div>hls：</div>
                                        <div><Input value={playUrlData.hls} addonAfter={<Icon type="copy" />} /></div>
                                    </div>
                                </div>
                            </Tabs.TabPane>
                        </Tabs>

                    </div>
                </div>
            </div>

        </Modal>
    )

})