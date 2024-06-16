import React,{formatRef,useRef} from 'react'
import Return from './Return'
import {Input} from './Input'

let InputValue
let nameValue;
export default function Sumbit(props){
    const {
        Version=1.0,
        value=[],
    }=props
    const idRef=useRef()
    const versionRef=useRef()
    const nameRef=useRef()
    let zValue

    if(value!==[]){
        // console.log(value);
        zValue = value
    }
    if(zValue===undefined){
        
    }else{
        nameValue=zValue;
    }
    const handleChange=()=>{
        if(zValue===undefined){

        }else{
            InputValue=nameRef.current.value;
        }
    }

    return <>
        <div>
            <div style={{color:"#aaa",margin:"5px"}}>Version: {Version}</div>
            <Return url="/designpage/config"></Return>
        </div>

        <div className="PageRender_Content" style={{height:"auto"}}>
            <Input onChange={handleChange} ref={nameRef} title="表单名称" defaultValue={nameValue}></Input>
        </div>
    </>
}
export const getValue = ()=>{
    if(InputValue===undefined){
        return nameValue
    }else{
        return InputValue
    }
}