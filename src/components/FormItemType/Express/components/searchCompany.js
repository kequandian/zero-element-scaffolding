import React,{useState,forwardRef,useImperativeHandle,useRef} from 'react'
import promiseAjax from '@/utils/promiseAjax'
import { Select } from 'antd'
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle'
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
export default forwardRef(function SearchCompany(props,ref){
    const {

    }=props

    const [options,setOptions] = useState([])
    const [selectData,setSelectData] = useState()
    const endpoint = getEndpoint()
    useDidMount(_=>{
        let api = `${endpoint}/api/crud/order/expresses`
        let data = {
            "pageSize":100,
            "pageNum":1
        }
        // let method = "GET"
        promiseAjax(api,data).then((res)=>{
            // console.log(res.data.records)
            let records = res.data.records
            let arr = []
            records.map((item,i)=>{
                let value = {
                    "label":item.name,
                    "value":item.id
                }
                arr.push(value)
            })
            // console.log(arr,"ARR")
            setOptions(arr)
        })
    })

    function handleSelect(e){
        // console.log(e)
        setSelectData(e)
    }
    useImperativeHandle(ref,
        ()=>{
            return {
                "value":selectData
            }
        })
    return <>
        <Select 
             style={{ width: "100%" }} 
            options={options} 
            onChange={(e)=>handleSelect(e)}
            />
    </>
})