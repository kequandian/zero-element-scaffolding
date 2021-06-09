import React from 'react'
import {message} from 'antd'
export default function Button(props){
    const{
        text="保存",
        onClick=handleClick
    }=props
    function handleClick(){
        message.success("保存成功！")
    }
    return <button className="PageRender_Button" onClick={onClick}>
        {text}
    </button>
}