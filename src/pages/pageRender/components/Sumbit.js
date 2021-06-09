import React,{formatRef,useRef} from 'react'
import Return from './Return'
import {Input} from './Input'

export const Sumbit=(props)=>{
    const {
        Version,
        onChange
    }=props
    const idRef=useRef()
    const versionRef=useRef()
    const nameRef=useRef()

    return <>
        
        <div>
            <div style={{color:"#aaa",margin:"5px"}}>Version: {Version}</div>
            <Return url="/designpage/config"></Return>
        </div>

        <div className="PageRender_Content" style={{height:"auto"}}>
            <Input onChange={onChange} ref={nameRef} title="表单名称"></Input>
        </div>
    </>
}