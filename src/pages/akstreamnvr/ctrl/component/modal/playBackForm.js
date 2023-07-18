import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Calendar } from "antd";
import promiseAjax from '@/utils/promiseAjax';
import moment from "moment";
import ReactPlayer from "../../component/ReactPlayer";

import './playBackForm.less'

export default forwardRef(function Index(props, ref) {

    const apiDomin = `${location.protocol}//${window._env_.REACT_APP_API_HOST}`;
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    const [visible, setVisible] = useState(false);
    const [channelData, setChannelData] = useState({});
    const [calValue, setCalValue] = useState(moment());
    const [recordMonthly, setRecordMonthly] = useState();
    const [recordDaily, setRecordDaily] = useState();
    const [playSrcIdx, setPlaySrcIdx] = useState();
    const [reactPlayer, setReactPlayer] = useState();

    //回调
    useImperativeHandle(ref,
        () => {
            return {
                onShow,
                onClose
            }
        });

    const onShow = (data) => {
        if (data) {
            setChannelData(data)
            loadChannelRecord(data)
        }
        setVisible(true)
    };

    const onClose = e => {
        setVisible(false)
        setChannelData({})
    }

    //
    const loadChannelRecord = (data) => {
        data.calValue = calValue
        loadChannelRecordMonthly(data);
    }

    const loadChannelRecordMonthly = (params) => {

        console.log('date1111 == ', params.calValue.format("YYYY-MM-DD 00:00:00"))
        const apiPath = `/SipGate/GetHistroyRecordFileList?deviceId=${params.deviceId}&channelId=${params.channelId}`;
        const query = {
            sipRecordFileQueryType: 0,
            startTime: params.calValue.format("YYYY-MM-DD 00:00:00"),
            endTime: params.calValue.format("YYYY-MM-DD 23:59:59"),
            taskId: 0,
        }
        promiseAjax(apiAKStream + apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
            .then(res => {
                console.log('channel = ', res)
                if (res.code === 200) {
                    setTimeout(() => {
                        getHistroyRecordFileStatus(res.data)
                    }, 2000)
                } else {
                }
            })
            .finally(_ => {
            })

    }

    const getHistroyRecordFileStatus = (taskId) => {

        const apiPath = `/SipGate/GetHistroyRecordFileStatus`;
        const query = {
            secret,
            taskId: taskId
        }
        promiseAjax(apiAKStream + apiPath, query, { method: 'GET', AccessKey: `${AccessKey}` })
            .then(res => {
                console.log('histroy record = ', res)
                if (res.code === 200) {

                    if (!res.data) {
                        message.error('没找到录像资源');
                    } else {
                        setRecordMonthly({
                            ...res.data.recItems,
                            taskId: res.data.taskId,
                            ssrcId: Array.from(res.data.recItems)
                        })
                        setPlaySrcIdx(res.data.recItems && res.data.tatolCount > 0 ? res.data.tatolCount : null)
                        setRecordDaily({
                            ...res.data.recItems,
                            taskId: res.data.taskId,
                            list: res.data.recItems ? res.data.recItems.map((record, recordIndex) => {

                                const beginTime = moment(record.startTime, "YYYY-MM-DD HH:mm:ss");
                                const endTime = moment(record.endTime, "YYYY-MM-DD HH:mm:ss");

                                return {
                                    ...record,
                                    beginTime: beginTime.valueOf(),
                                    endTime: endTime.valueOf(),
                                    style: {
                                        background: "rgba(14,255,0,0.49)"
                                    },
                                    idx: recordIndex,
                                }
                            }) : []
                        })
                    }

                } else {
                }
            })
            .finally(_ => {
            })
    }

    //日历
    const handleCalendarSelect = (date) => {
        setCalValue(date);
        loadChannelRecordMonthly({...channelData, calValue:date });
    }

    return (
        <Modal
            title={`回看: ${channelData.channelName}`}
            visible={visible}
            onCancel={onClose}
            maskClosable={false}
            footer={null}
            width={1120}
            destroyOnClose={true}
        >


            <div className={"playBackForm-play-container"}>

                <div className={"playBackForm-play-header"}>
                    <div className={"playBackForm-player"}>
                        {
                            playSrcIdx != null && recordDaily && recordDaily.list && recordDaily.list.length > 0 && recordDaily.list[playSrcIdx] &&
                            <ReactPlayer
                                ref={(rPlayer) => setReactPlayer(rPlayer)}
                                className={"playBackForm-zpplayer-player"}
                                {...playinfo}
                                // src={recordDaily.list[playSrcIdx].mp4Full}
                                src={recordDaily.list[0].mediaServerStreamInfo.playUrl[1]}
                                // onRateChange={handleplayBackFormRateChange}
                                // onEnded={handlePlayerEnded}
                                // onPlay={handlePlayerPlay}
                                // onTimeUpdate={handlePlayeTimeUpdate}
                                autoplay />
                        }

                    </div>
                    <div className={"playBackForm-calendar"}>
                        <Calendar fullscreen={false}
                            value={calValue}
                            onChange={handleCalendarSelect}
                        //   disabledDate={this.calDisabledDateFuc}
                        />
                    </div>
                </div>

                {/* <div className={"playBackForm-play-bottom"}>
                    时间轴
                </div> */}
            </div>

        </Modal>
    )

})