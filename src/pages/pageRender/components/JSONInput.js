import React,{forwardRef,useRef,useState} from 'react'
import InputTag from './InputTag'

let InputValue;
let ValueDefault;

export const JSONInput=forwardRef((props,cref)=>{
    const {
        width="100%",
        height=screen.height,
        textColor="#7EC68B",
        background="#2D2D2D",
        maxlength,
        placeholder="请输入JSON",
        defaultValue,
        onChange
    }=props
    // console.log(screen.height);
    const [length,setLength] = useState()
    // 定义按键发生事件
    // function isKey(e){
    //     switch(e.keyCode){
            
    //     }
    // }
    ValueDefault=defaultValue;
    const handleChange=()=>{
        // console.log(cref.current.value.length);
        // 定义文字长度
        setLength(cref.current.value.length)
        if(defaultValue===undefined){
            
        }else{
            InputValue=cref.current.value
        }
    }
    return <div className="JSONInput" style={{width:width,height:height,position:"relative"}}>
        {maxlength?<><InputTag number={length} maxlength={maxlength}></InputTag>
        <textarea ref={cref} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange,handleChange} type="input" className="JSONInput" maxLength={maxlength} style={{width:"100%",height:"100%",color:textColor,background,resize: "none"}} /* onKeyDown={(e)=>{isKey(e)}} */></textarea>
        </>
        :<>
        <InputTag number={length}></InputTag>
        <textarea ref={cref} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange,handleChange} type="input" className="JSONInput" style={{width:"100%",height:"100%",color:textColor,background,resize: "none"}} /* onKeyDown={(e)=>{isKey(e)}} */></textarea>
        </>}
    </div>
})

export const getValue = ()=>{
    if(InputValue===undefined){
        return ValueDefault
    }else{
        return InputValue
    }
}