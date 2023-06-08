import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Spin} from "antd";

import FromConfig from '../form';

export default forwardRef(function Index (props, ref) {

    const { mode, onRequest } = props;

    const [ visible, setVisible ] = useState(false); 
    const [ channelData, setChannelData ] = useState({});

    //回调
    useImperativeHandle(ref,
    () => {
        return {
            onShow,
            onClose
        }
    })

    const onShow = (data) => {
        if(data){
            setChannelData(data)
        }
        setVisible(true)
    };

    const onClose = e => {
        setVisible(false)
    }

    const handleSubmit = (e) => {
        if(onRequest){
            onRequest(e, mode)
        }
    }

    return (
        <Modal
            title="添加设备"
            visible={visible}
            onCancel={onClose}
            maskClosable={false}
            footer={null}
            width={620}
            destroyOnClose={true}
        >
            <FromConfig visible={visible} fromData={channelData} handleSubmit={handleSubmit}/>
        </Modal>
    )

})