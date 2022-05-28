import React, { useState, useEffect } from 'react';
import { Select, message, Spin } from 'antd';
import promiseAjax from '@/utils/promiseAjax';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { changeApiParam } from '@/utils/formatApi';

const { Option } = Select;

export default function (props) {

    const { field, defaultValue, options, onChange, saveData, postData, linkage } = props;

    const { api, label, value, saveField } = options

    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState([]);

    useEffect(_ => {
        getList()
    }, [linkage]);

    useWillUnmount(_ => {
    });

    function getList() {
        setLoading(true)
        let formatAPI = api
        if(formatAPI.indexOf('(') != -1){
            const rtValue = changeApiParam(formatAPI)
            formatAPI = formatAPI.replace(`(${rtValue})`, postData[rtValue]);
        }
        const apiUrl = `${getEndpoint()}${formatAPI}`;
        const queryData = {}
        promiseAjax(apiUrl, queryData)
            .then(resp => {
                // console.log(resp, ' == 获取list信息')
                if (resp.code === 200) {
                    const data = resp.data;
                    setListData(data)
                } else {
                    console.error('select fetch获取信息失败')
                }
            })
            .finally(_ => {
                setLoading(false)
            })
    }


    const handleChange = (value) => {
        // console.log(`selected ${value}`);
        if (onChange) {
            //TODO
            onChange({
                target: {
                    value:value
                  }
            })
        }
        if(saveData){
            const nData = {}
            nData[field] = value
            //保存额外数据
            if(saveField){
                Object.keys(saveField).map(key =>{
                    listData.map(item => {
                        // console.log('item === ', item)
                        if(item.id === value){
                            nData[key]=item[saveField[key]]
                        }
                    })
                })

                if(!value){
                    Object.keys(saveField).map(key =>{
                        nData[key]=undefined
                    })
                }
            }
            saveData(nData)
        }
    };

    return (
        <Spin spinning={loading}>
            <Select style={{ width: '100%' }} placeholder="请选择" onChange={handleChange} allowClear>
                {listData && listData.length > 0 && listData.map((item, index) => (
                    <Option value={item[value]} key={index}>{item[label]}</Option>
                ))}
            </Select>
        </Spin>
    )

}