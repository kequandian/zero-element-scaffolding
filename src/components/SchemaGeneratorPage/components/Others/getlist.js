import {Skeleton,Alert} from 'antd'
import {useState,useEffect} from 'react'

import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { getToken } from 'zero-element/lib/utils/request/token';

import Tag from '@/../zero-antd-dep/valueType/tag'

export default function (){
    const [isactive,setIsactive] = useState()
    let endpoint = getEndpoint();
    let API = `${endpoint}/api/crud/virtualForm/virtualForms?typeId=&_t=1621577416306&pageNum=1&pageSize=10`
    let token = getToken()
    const [isContent,setIsContent]=useState();
    const [MenuList,setMenuList] = useState({})

    let code=new Array();
    let NameList=new Array();
    useEffect(() => {
        
        fetch(API,{
            headers:{
                "Content-Type":"application/json;charset=UTF-8",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res=>{
            let json=res.json();
            console.log(json);
            Promise.resolve(json).then((val)=>{
                console.log(val.code)
                if(val.code===200){
                    setMenuList(val.data.records)
                    setIsContent(true)
                }else{
                    setIsContent(false)
                }
            })
   
        })
        .catch(err=>{
            console.log(err);
        })
    },[])


    function getElement(){
        let ml;
        for(let i=0;i<MenuList.length;i++){
            ml=MenuList[i]
            console.log(ml.code);
            code.push(ml.code)
            NameList.push(ml.formName)
        }
        console.log(ml)
        console.log(code);
        console.log(NameList);
    }

    getElement()

    console.log(MenuList);
    return <>
        <h1 className="Form-title">
            现有子表单列表展示
        </h1>
        <Alert message="请对应下面的子表单名，在右侧栏中填入对应的code字段来获取该子表单" type="info" closeText="关闭" />
        {isContent?<div className="Form-Skeleton">
            <ul className="Form-list">
            <li key="子表单名">子表单名</li>
            <li key="code字段">code字段</li>
            {NameList.map((t,i)=>{
                return <>
                <li key={i}>{t}</li>
                <li key={i+t}><Tag data={{text:code[i]}} type="default" theme="option" state="blue" ></Tag>
                </li>
                </>
            })}</ul></div>:
       <Skeleton className="Form-Skeleton" active={isactive} />
        }

    </>
}