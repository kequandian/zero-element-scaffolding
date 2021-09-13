import React,{useState,useRef,useImperativeHandle, forwardRef} from "react"
import { Input,Select,Switch,InputNumber,Checkbox,Collapse } from 'antd'
import _ from 'lodash'
import TheJson from '@/../zero-antd-dep/formItemType/JSON'
export default forwardRef((props,ref)=>{
    const {
        formData,
        config,
        unUseDefaultValue = false
    }=props
    const CheckboxGroup = Checkbox.Group
    const { Panel } = Collapse;
    const [data,setData] = useState(formData)
    function getFormData(field){
        return _.get(formData,field,"")
    }
    function getSwitchData(field){
        let data = getFormData(field)
        let value;
        if(data === "1"||data === 1||data === true){
            value = true
        }else{
            value = false
        }
        return value
    }
    function ChangeValue(field,e){
        let newData = data||{}
        newData[field]= e.target.value
        setData(newData)
    }
    function defaultChange(field,e){
        let newData = data||{}
        newData[field]= e
        console.log(e)
        setData(newData)
    }
    function switchChange(field,e){
        let newData = data||{}
        newData[field]= e?1:0
        console.log(e)
        setData(newData)
    }
    function JsonChange(field,e){
        let newData = data||{}
        console.log(e)
        newData[field]= JSON.stringify(e)
        setData(newData)
    }
    function GetJsonValue(field){
        let formdata = getFormData(field)
        let json
        if(formdata){
             json = JSON.parse(formdata)
        }
        return json
    }
    function handleSelect(field,e){
        let newData = data||{}
        console.log(e.toString())
        newData[field]=e.toString()
        console.log(newData)
    
        setData(newData)
    }
    function getSelectData(field){
        let SelectData
        let theForm = getFormData(field)
        if(theForm){
            let newData = theForm.toString()
            console.log(newData)
            let newValue = newData.replace(/\[/g,"") 
            let thenValue = newValue.replace(/\]/g,"") 
            let allValue = thenValue.replace(/\"/g,"") 
            let json = allValue.split(',')
            SelectData=json
            console.log(SelectData)
        }
        return SelectData
    }
    useImperativeHandle(ref,
        ()=>{
            return {
                data
            }
        })
        // 选择项
        const selectEndpoint = (item,i) => {
            return <>{item.mode==="multiple"?<CheckboxGroup
            defaultValue={getSelectData(item.field)||item.defaultValue} 
            style={{ width: "100%" }} 
            options={item.options} 
            onChange={(e)=>handleSelect(item.field,e)}
            >
            </CheckboxGroup>:<Select 
            defaultValue={getSelectData(item.field)||item.defaultValue} 
            mode={item.mode} style={{ width: "100%" }} 
            options={item.options} 
            onChange={(e)=>handleSelect(item.field,e)}
            />}</>
        }
        //json项
        const jsonEndpoint = (item,i) => {
            return <TheJson
                value={GetJsonValue(item.field)}
                onChange={(e)=>JsonChange(item.field,e)}
                key={i}
            >
            </TheJson>
        }
        // switch项
        const switchEndpoint = (item,i) => {
            return <Switch defaultChecked={getSwitchData(item.field)||item.defaultValue}
                        onChange={(e)=>switchChange(item.field,e)}
            />
        }
        // 默认input
        const inputEndpoint = (item,i) => {
            return <Input
            defaultValue={getFormData(item.field)||item.defaultValue}
            addonAfter={item.addonAfter}
            onChange={(e)=>ChangeValue(item.field,e)}
            key={i}
            size="middle"
             />
        }

        const numberEndpoint = (item,i) => {
            return <InputNumber
            addonAfter={item.addonAfter}
            defaultValue={getFormData(item.field)||item.defaultValue}
            onChange={(e)=>defaultChange(item.field,e)}
            key={i}
            size="middle"
             />
        }

        const AllFormType = (item,i) =>{
            return <div className="dynamic_column"><div>{item.label}：</div>{ 
                item.type==="JSON"?jsonEndpoint(item,i):
               item.type==="select"?selectEndpoint(item,i):
               item.type==="switch"?switchEndpoint(item,i):
               item.type==="number"?numberEndpoint(item,i):
                inputEndpoint(item,i)}</div>
        }
    return <>
        {config?config.map((item,i)=>
            item.children?<Collapse>
                <Panel header={item.header}>
                    {item.children.map((child,a)=>AllFormType(child,a))}
                </Panel>
            </Collapse>:
           AllFormType(item,i)) :null}
    </>
})