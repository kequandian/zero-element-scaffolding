import React,{useState,useEffect} from 'react'
import { getToken } from 'zero-element/lib/utils/request/token';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

export default function getData(props){
    const {
        API,
        method="GET",
        data="",
        field
    }=props
    const [APIdata,SetAPIdata] = useState()
    const token = getToken()
    const endpoint = getEndpoint()
    useEffect(() => {
        
        fetch(endpoint+API,{
            data:data,
            headers:{
                "Content-Type":"application/json;charset=UTF-8",
                "Authorization":`Bearer ${token}`
            },
            method:method
        })
        .then(res=>{
            let json=res.json();
            console.log(json);
            Promise.resolve(json).then((val)=>{
                // console.log(val.data.avatar)
                if(val.code===200){
                  SetAPIdata(val.data[field])
                }else{
                  console.error("错误")
                }
            })
    
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return APIdata
}