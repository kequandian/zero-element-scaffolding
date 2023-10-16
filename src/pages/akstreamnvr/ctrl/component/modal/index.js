import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Spin} from "antd";

import FromConfig from '../form';

export default forwardRef(function Index (props, ref) {

    const { width=620, mode, onRequest, formConfig={} } = props;

    const [ visible, setVisible ] = useState(false); 
    const [ fromData, setFromData ] = useState({});

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
            setFromData(data)
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
            width={width}
            destroyOnClose={true}
        >
            <FromConfig visible={visible} fromData={fromData} formConfig={formConfig} handleSubmit={handleSubmit} mode={mode}/>
        </Modal>
    )

})