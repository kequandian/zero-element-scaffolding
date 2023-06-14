import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function Index (props) {

    const { field, placeholder = '', defaultValue = '', props: optProps = {}, changeValues } = props;

    const { options } = optProps;
    
    function handleChange(value) {
        changeValues(value, field)
    }

    return (
        <Select defaultValue={defaultValue} placeholder={placeholder}  onChange={handleChange}>
            { options && options.map((item,index) => {
                return (
                    <Option key={index} value={item.value}>{item.label}</Option>
                )
            })
            }
        </Select>
    )
}