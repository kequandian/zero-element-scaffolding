import { Button,Modal,Card } from "antd";
import React,{useState} from 'react'
import { ComponentSvg } from "../svg";
export default function ShowModal(props){
    const {
        title,
        titleLabel,
        field,
        fieldLabel,
        type="button",
        background="#1B7FBC",
        onSuccess=hide,
        onError=hide
    }=props
    const [ visabled,setVisabled ] =useState()
    const changeVisabled = () =>{
        setVisabled(!visabled)
    }
    function hide(){
        setVisabled(false)
    }
    function handleSuccess(){
        hide()
        onSuccess()
    }
    function handleError(){
        hide()
        onError()
    }
    return <>
    {type==="button"?<Button onClick={changeVisabled} style={{background:background,boxShadow:"0px 0px 5px #aaa",color:"white",fontWeight:"bolder",fontSize:"14px",width:"100%",height:"4em",marginRight:"20px"}}> 
        {title}
    </Button>:<Card onClick={changeVisabled} style={{background:"white",boxShadow:"0px 0px 5px #666"}}>
            <p><span style={{fontWeight:"bolder",marginRight:"10px"}}>{titleLabel}:</span>{title}</p>
            <p><span style={{fontWeight:"bolder",marginRight:"10px"}}>{fieldLabel}:</span>{field}</p>
        </Card>}
    <Modal title={title} visible={visabled} onOk={handleSuccess} onCancel={handleError}>
        {props.children}
    </Modal>
    </>
}