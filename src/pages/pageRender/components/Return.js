import React from 'react'
import {history} from 'umi'
import {ReturnSvg} from '../public/svg'
export default function Return(props){
    const {
        url,
        color
    }=props
    const jump = () =>{
        history.push(url)
        window.location.href=""
    }
    return <div className="PageRender_Return" onClick={jump}>
    <ReturnSvg height="32" width="32" color={color}></ReturnSvg>
    </div>
}