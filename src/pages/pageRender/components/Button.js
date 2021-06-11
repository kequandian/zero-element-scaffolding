import React from 'react'
import {message} from 'antd'
export default function Button(props){
    const{
        text="保存",
        background="D69A41",
        color="white",
        width="100%",
        height="100px",
        flex,
        onClick=handleClick
    }=props
    function handleClick(){
        message.success("保存成功！")
    }
    return <button className="PageRender_Button" style={{background,color,width,height,flex}} onClick={onClick}>
        {text}
    </button>
}