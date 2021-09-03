import { Button,Modal,Collapse  } from "antd";
import React,{useState} from 'react'
import { ComponentSvg } from "../svg";
export default function ShowModal(props){
    const {
        title,
        titleLabel,
        field,
        fieldLabel,
        icon,
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
    {type==="button"?<div className="Dynamic_button" onClick={changeVisabled} style={{background:background,boxShadow:"0px 0px 5px #aaa",color:"white",fontWeight:"bolder",fontSize:"14px",marginRight:"20px"}}> 
    <span style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",marginTop:"3px"}}>{icon}</span>
    </div>:<div className="Modal_list" onClick={changeVisabled}>
            <p><span style={{fontWeight:"bolder",marginRight:"10px",marginLeft:"10px"}}>{titleLabel}:</span>{title}</p>
            {/* <p><span style={{fontWeight:"bolder",marginRight:"10px"}}>{fieldLabel}:</span>{field}</p> */}
        </div>}
    <Modal title={title} visible={visabled} onOk={handleSuccess} onCancel={handleError}>
        {props.children}
    </Modal>
    </>
}