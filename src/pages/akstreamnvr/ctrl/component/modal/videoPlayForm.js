import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Input, Tabs, Icon } from "antd";
import promiseAjax from '@/utils/promiseAjax';


import './videoPlayForm.less'

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
            title={`视频: ${channelData.channelName}`}
            visible={visible}
            onCancel={onClose}
            maskClosable={false}
            footer={null}
            width={1120}
            destroyOnClose={true}
        >
            <div className={"videoPlayForm-play-container"}>

                <div className={"videoPlayForm-play-header"}>
                    <div className={"videoPlayForm-player"}>

                        <live-player 
                            video-url={ playUrlData.flv === undefined ? `${apiDomin}/`+channelData.app+'/'+channelData.mainId+'.live.flv':playUrlData.flv}
                            live="true"
                            >
                        </live-player>

                    </div>

                </div>

            </div>

        </Modal>
    )

})