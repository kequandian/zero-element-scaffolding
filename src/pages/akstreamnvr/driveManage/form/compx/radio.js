import React from 'react';
import { Radio, Tooltip, Space, Button } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

export default function Index (props) {

    const { field, defaultValue = '', props: optProps, extra, changeValues } = props;

    const { options } = optProps;
    
    function onChange(e) {
        changeValues(e.target.value, field)
    }

    return (
        
        <Space>
            <Radio.Group buttonStyle="solid"  onChange={onChange} defaultValue={defaultValue}>
                { options.map((item, index) => {
                    return (
                        <Radio.Button key={index} value={ item.value }>{ item.label }</Radio.Button>
                    )
                })}
            </Radio.Group>
            {extra?(
                <Tooltip placement="rightTop" title={extra}>
                    <Button shape="circle" icon={<QuestionOutlined />} size="small" />
                </Tooltip>
            ):<></>}
        </Space>
    ) 
}