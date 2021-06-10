import React from 'react'
import {history} from 'umi'
import PhoneTag from './PhoneTag';
export default function Page(props){
    const{
        title,
        id,
        version,
        json,
    }=props
    console.log(title);
    console.log(id);
    console.log(version);
    console.log(json);

    const handleClick = () =>{
        history.push("/pageRender/pageRender-add?id="+id)
        window.location.href=""
    }
    return <div className="PageRender_PagesContent" onClick={handleClick}>
        <div className="PageRender_PagesTitle">{title}<PhoneTag/></div>
        
    </div>
}