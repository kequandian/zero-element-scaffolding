import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Input, Tabs, Icon } from "antd";
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';

import './playForm.less'

export default forwardRef(function Index(props, ref) {

    const { mode, onRequest } = props;

    const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
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
    
    useDidMount(_=>{
        loadChannel()
    })
    

    const loadChannel = (params) => {

        const apiPath = '/MediaServer/StreamLive';

        const query = {
            mediaServerId: channelData.mediaServerId,
            mainId: channelData.mainId
        }

        promiseAjax(apiAKStream+apiPath, query, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {
            console.log('res = ', res)
            if(res){
            }
        })
        .finally(_=>{
        })

        // StreamLive(channelData.mediaServerId, channelData.mainId).then(res => {
            // if(res._success && res._statusCode === 200 && res.data)
            // {
            //     this.setState({
            //         playUrl:{
            //             flv:res.data.playUrl[1],
            //             hls:res.data.playUrl[4],
            //             rtmp:res.data.playUrl[3],
            //             rtsp:res.data.playUrl[2],
            //             // flv:`${apiDomin}/`+this.state.channel.app+'/'+this.state.channel.mainId+'.live.flv',
            //             // hls:`${apiDomin}/`+this.state.channel.app+'/'+this.state.channel.mainId+'/hls.m3u8',
            //             // rtmp:`${apiDomin}/`+this.state.channel.app+'/'+this.state.channel.mainId,
            //             // rtsp:`${apiDomin}/`+this.state.channel.app+'/'+this.state.channel.mainId,
            //         }
            //     })
            // }
        // })
    }

    const onShow = (data) => {
        if (data) {
            setChannelData(data)
        }
        setVisible(true)
    };

    const onClose = e => {
        setVisible(false)
    }

    const handleSubmit = (e) => {
        if (onRequest) {
            onRequest(e, mode)
        }
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
            <div className={"playback-play-container"}>

                <div className={"playback-play-header"}>
                    <div className={"playback-player"}>

                        <div>视频</div>

                        {/* <AKStreamPlayer
                            playUrl={playUrlData.flv == undefined ? `${apiDomin}/` + channelData.app + '/' + channelData.mainId + '.live.flv' : playUrlData.flv}
                            hasAudio={false}
                        /> */}

                    </div>

                    {/* <RvPtz
                        deviceId={this.state.channel.deviceId}
                        channelId={this.state.channel.channelId}
                    /> */}

                </div>

                <div className={"playback-play-bottom"}>
                    <div className={"playback-calendar"}>
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