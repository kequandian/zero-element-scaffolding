import React from 'react';
import { Switch, Tooltip, Space, Button } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

export default function Index (props) {

    const { field, checkedChildren, unCheckedChildren, defaultValue, extra='', changeValues } = props;

    function onChange (value) {
        changeValues(value, field)
    }

    return (
        <Space>
            <Switch checkedChildren={checkedChildren} unCheckedChildren={unCheckedChildren} defaultChecked={defaultValue} onChange={onChange}/>
            {extra?(
                <Tooltip placement="rightTop" title={extra}>
                    <Button shape="circle" icon={<QuestionOutlined />} size="small" />
                </Tooltip>
            ):<></>}
        </Space>
    )
}