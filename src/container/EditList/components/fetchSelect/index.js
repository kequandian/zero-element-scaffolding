import React, { useState, useEffect } from 'react';
import { message, Select } from 'antd';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { useDidMount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import './index.less'

const { Option } = Select;

export default function FetchSelect(props) {

    const { options, value, onChange, cb } = props
    const { getAPI = '' } = options;

    const [selectKey, setSelectKey] = useState(0)

    const [hidden, setHidden] = useState(true)

    const [defaultValue, setDefaultValue] = useState({ "value": "10" })
    const [loading, setLoading] = useState(undefined);

    useDidMount(_ => {
        getData()
    })

    function getData() {

        setLoading(true)
        promiseAjax(getAPI, {})
            .then(resp => {
                if (resp && resp.code === 200) {
                    // const listdata = resp.data;
                } else {
                    message.error('修改失败')
                }
            })
            .finally(_ => {
                setLoading(false)
            })
    }

    function handleChange(data) {
        if(cb){
            cb(data)
        }
        // onChange(change)
    }

    return <>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
    </>
}
