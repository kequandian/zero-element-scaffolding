import React, { useState } from 'react';
import { Form, Input, Button } from "antd";
const formItem = require('./compx/export') ;

import './index.less'

const defaultLabelCol = {
    xs: { span: 6, },
};

const defaultWrapperCol = {
    xs: { span: 14, },
};

export default function Index (props) {

    const { formConfig } = props;

    const { fromData={}, handleSubmit, mode='create' } = props;

    const [ form ] = Form.useForm();
    const [ formItemList, setFormItemList ] = useState(formConfig);

    //重置表单
    const onReset = () => {
        form.resetFields()
    }

    const MatchType = ({item, changeValues}) => {
        if(!formItem){
            return
        }
        const C = formItem[item.type]
        
        if(C){
            return (
                <>
                    <Form.Item label={item.label} name={item.field} 
                        rules={ item.tips ? [{ required: true, message: item.tips }] : []}>
                        <C {...item} defaultValue={fromData[item.field]} changeValues={changeValues} />
                    </Form.Item> 
                    <div style={{ width: '100%', height: '10px'}}></div>
                </>
            )
        }
    }

    //onValuesChange
    function changeValues(v, field) {
        fromData[field] = v;
        form.setFieldsValue({...fromData})
    }

    
    function handleSubmitForm(values) {
        // console.log("values == ", values)
        if(mode=='active'){
            values.mainId = fromData.mainId
        }
        handleSubmit(values)
    }
    

    return (
        <div className='drive-form-css'>
            <Form 
                initialValues={fromData}
                labelCol={defaultLabelCol}
                wrapperCol={defaultWrapperCol} 
                form={form} 
                onFinish={handleSubmitForm} >
                
                {
                    formItemList.map((item, index) => (
                        <MatchType key={index} item={item} changeValues={changeValues} />
                    ))
                }
                
                {/* <Form.Item label="vhost11" name="vhost2" rules={[{ required: true, message: '请输入虚拟主机vhost' }]}>
                    <Input
                        placeholder="虚拟主机vhost"
                    />
                </Form.Item> */}

                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: '20px' }}>
                        <Button style={{ marginRight: '15px' }} onClick={()=>onReset()} >
                            重置
                        </Button>
                        <Button type="primary" htmlType="submit" >
                            提交
                        </Button>
                    </div>
                </Form.Item>
                
                
            </Form>
        </div>
    )

}