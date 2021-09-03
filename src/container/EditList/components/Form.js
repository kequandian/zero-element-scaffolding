import React,{useState,useRef,useImperativeHandle, forwardRef} from "react"
import { Input,Select,Switch } from 'antd'
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
        console.log(e)
        setData(newData)
    }
    function handleSelect(field,e){
        let newData = data||{}
        newData[field]=e
        console.log(newData)
    
        setData(newData)
    }
    function getSelectData(field){
        let SelectData

        let newData = getFormData(field).toString()
        console.log(newData)
        let newValue = newData.replace(/\[/g,"") 
        let thenValue = newValue.replace(/\]/g,"") 
        let allValue = thenValue.replace(/\"/g,"") 
        let json = allValue.split(',')
        SelectData=json
        console.log(SelectData)

        return SelectData
    }
    useImperativeHandle(ref,
        ()=>{
            return {
                data
            }
        })

    return <>
        {config?config.map((item,i)=>
            item.type==="JSON"?<div className="dynamic_column"><span>{item.label}：</span><JSON
                value={getFormData(item.field)}
                onChange={(e)=>JSONChange(item.field,e)}
                key={i}
            >
            </JSON></div>:item.type==="select"?<div className="dynamic_column"><span>{item.label}：</span><Select defaultValue={getSelectData(item.field)} mode={item.mode} style={{ width: "100%" }} options={item.options} onChange={(e)=>handleSelect(item.field,e)}>
    </Select></div>:item.type==="switch"?<div className="dynamic_column">
        <div>{item.label}：</div><Switch defaultChecked={getFormData(item.field)}
            onChange={(e)=>handleSelect(item.field,e)}
        ></Switch>
    </div>:<div className="dynamic_column"><span>{item.label}：</span><Input
            defaultValue={getFormData(item.field)}
            addonAfter={item.addonAfter}
            onChange={(e)=>ChangeValue(item.field,e)}
            key={i}
            size="middle"
             >

            </Input>
            </div>
        ):null}
    </>
})