import React, { useState, useEffect } from 'react';
import { Select, Tooltip, Space, Button } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import { useWillMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';

const { Option } = Select;

export default function Index (props) {

    const { field, placeholder = '', defaultValue = '', props: optProps = {}, extra, changeValues } = props;

    const { api, label, value } = optProps;

    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    const [ selectList, setSelectList ] = useState([])

    useEffect(_=>{
        getList ()
    }, [])
    
    function handleChange(value) {
        changeValues(value, field)
    }

    function getList () {
        promiseAjax(apiAKStream+api, {secret:secret}, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {

            if(res){
                setSelectList(res)
            }else{
                console.error('获取select列表异常 = ', res)
            }
        })
        .finally(_=>{
        })
    }


    return (
        <Space>
            <Select style={{width: '333px'}} defaultValue={defaultValue} placeholder={placeholder}  onChange={handleChange}>
                { selectList.map((item,index) => {
                    return (
                        <Option key={index} value={item[value]}>{item[label]}</Option>
                    )
                })
                }
            </Select>
            {extra?(
                <Tooltip placement="rightTop" title={extra}>
                    <Button shape="circle" icon={<QuestionOutlined />} size="small" />
                </Tooltip>
            ):<></>}
        </Space>
    )
}