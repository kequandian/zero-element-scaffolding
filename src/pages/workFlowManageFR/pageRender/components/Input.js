import React,{forwardRef} from 'react'

export const Input=forwardRef((props,cref)=>{
    const{
        defaultValue="",
        readOnly=false,
        title,
        placeholder="请输入"+title,
        onChange
    }=props
    return  <div className="PageRender_pages">
            <div className="PageRender_InputBox">
        {title?<span className="PageRender_Title">{title}:</span>:null}
        <input onChange={onChange} type="text" className="PageRender_Input" readOnly={readOnly} ref={cref} defaultValue={defaultValue} placeholder={placeholder}></input>
        </div>
    </div>
})