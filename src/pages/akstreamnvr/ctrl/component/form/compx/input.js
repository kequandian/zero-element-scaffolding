import React from 'react';
import { Input, Tooltip, Space, Button } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

export default function Index (props) {

    const { field, placeholder = '', defaultValue = '', extra, changeValues} = props;

    return (
        <Space>
            <Input style={{width: '333px'}} placeholder={placeholder} defaultValue={defaultValue} onChange={(e)=>changeValues(e.target.value, field)}/>
            {extra?(
                <Tooltip placement="rightTop" title={extra}>
                    <Button shape="circle" icon={<QuestionOutlined />} size="small" />
                </Tooltip>
            ):<></>}
        </Space>
    ) 
}