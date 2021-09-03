import React,{useState,useRef,useImperativeHandle, forwardRef} from "react"
import { Input,Select } from 'antd'
import _ from 'lodash'
import JSON from '@/../zero-antd-dep/formItemType/JSON'

export default forwardRef((props,ref)=>{
    const {
        formData,
        config
    }=props
    const [data,setData] = useState(formData)
    function getFormData(field){
        return _.get(formData,field)
    }
    function ChangeValue(field,e){
        let newData = data||{}
        newData[field]= e.target.value
        setData(newData)
    }
    function JSONChange(field,e){
        let newData = data||{}
        newData[field]= e
        setData(newData)
    }
    function handleSelect(field,e){
        let newData = data||{}
        newData[field]=e
        console.log(newData)
    
        setData(newData)
    }
    useImperativeHandle(ref,
        ()=>{
            return {
                data
            }
        })

    return <>
        {config?config.map((item,i)=>
            item.type==="JSON"?<><span>{item.label}：</span><JSON
                value={getFormData(item.field)}
                onChange={(e)=>JSONChange(item.field,e)}
                key={i}
            >
            </JSON></>:item.type==="select"?<><span>{item.label}：</span><Select defaultValue={getFormData(item.field)} style={{ width: "100%" }} options={item.options} onChange={(e)=>handleSelect(item.field,e)}>
    </Select></>:<><span>{item.label}：</span><Input
            defaultValue={getFormData(item.field)}
            onChange={(e)=>ChangeValue(item.field,e)}
            key={i}
            size="middle"
             >

            </Input>
            </>
        ):null}
    </>
})