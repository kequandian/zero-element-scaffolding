// 表单有问题

import { Menu, Dropdown,Button,Skeleton  } from 'antd';
import { useState } from 'react';
import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

export default function(){
/*     const [title,setTitle] = useState(null);
    const [code,setCode] = useState(null); */
    // const [length,setLength] = useState(0);
    const [GetNamejson,setGetNamejson] = useState(new Array());
    const [Getcodejson,setGetcodejson] =  useState(new Array());


    const menu = (
        <Menu>
            {
                GetNamejson.map((item)=>
                    <Menu.Item>
                        {item}
                    </Menu.Item>
                    )
                
            }
        </Menu>
    )
    const skeleton = (
        <Skeleton>

        </Skeleton>
    )
    function setJsonZero(){
        setGetNamejson(Array([]));
        setGetcodejson(Array([]))
    }
//    调用API
    function GetAPI(){
        const listAPI = `${getEndpoint()}/api/crud/virtualForm/virtualForms`;
         handleRequest(listAPI,{},{method:'GET'})
    }

    function handleRequest(apiUrl, queryData, other) {
        promiseAjax(apiUrl, queryData, other)
        .then(resp => {
            console.log(resp.data.records);
            for(let i=0;i<resp.data.records.length;i++){
                GetNamejson.push(resp.data.records[i].formName);
                Getcodejson.push(resp.data.records[i].code);
            }
            console.log(GetNamejson);
            console.log(Getcodejson);
            return GetNamejson,Getcodejson;
        }).catch(err=>[
            console.log(err)
        ])
    }
    


    return <Dropdown overlay={menu} arrow>
        <div>
            <Button onClick={setJsonZero,GetAPI}>获取表单</Button>
        </div>
    </Dropdown>
}