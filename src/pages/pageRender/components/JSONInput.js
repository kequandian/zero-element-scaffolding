import React,{forwardRef,useRef,useState} from 'react'
import InputTag from './InputTag'
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

    const handleChange=()=>{
        console.log(cref.current.value.length);
        setLength(cref.current.value.length)
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