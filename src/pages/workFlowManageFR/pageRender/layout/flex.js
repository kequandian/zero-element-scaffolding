import React,{useState} from 'react'
import '../public/index.less'
let AllFlex;
export const Flex=(props)=>{
    const {
        flex,
        children
    }=props
    AllFlex=flex
    return <div className="PageRender_Flex">
        {children}
    </div>
}
export const FlexChild=(props)=>{
    const{
        children
    }=props
    const width = 100
    // console.log(width/AllFlex);
    return <div className="PageRender_FlexChild" style={{width:`${width/AllFlex}%`}}>
        {children}
    </div>
}