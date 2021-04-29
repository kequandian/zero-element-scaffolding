import { Table,Button } from "antd";
import { useState } from 'react';
import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
export default function () {
    // 列表数据
    const [Data,setData] = useState([
        {
            TableName:"表1",
            componentType:"childrenForm",
            code:"111",
        },
        {
            TableName:"表2",
            componentType:"childrenForm",
            code:"222",
        },
        {
            TableName:"表3",
            componentType:"childrenForm",
            code:"333",
        },
    ])

    const columns = [
        {
            title:'表格名称',
            dataIndex:'TableName',
            key:'TableName',
            render:text => <a>{text}</a>
        },
        {
            title:'表格类型',
            dataIndex:'componentType',
            key:'componentType',
        },
        {
            title:'code字段',
            dataIndex:'code',
            key:'code'
        }
    ]

// 调用API

    const [GetNamejson,setGetNamejson] = useState(new Array());
    const [Getcodejson,setGetcodejson] =  useState(new Array());
    function clearJson(){
        setData([]);
        console.log(GetNamejson);
        console.log(Getcodejson);
    }
//    调用API
    function GetAPI(){
        const listAPI = `${getEndpoint()}/api/crud/virtualForm/virtualForms`;
        handleRequest(listAPI,{},{method:'GET'})
        console.log(Data);
        return Data;
    }

    function handleRequest(apiUrl, queryData, other) {
        promiseAjax(apiUrl, queryData, other)
        .then(resp => {
            console.log(resp.data.records);
            for(let i=0;i<resp.data.records.length;i++){
                GetNamejson.push(resp.data.records[i].formName);
                Getcodejson.push(resp.data.records[i].code);
                Data.push({
                    TableName: resp.data.records[i].formName,
                    componentType: "childrenForm",
                    code: resp.data.records[i].code,
                });
            }
            // console.log(Data)
            return Data,GetNamejson,Getcodejson;
        }).catch(err=>[
            console.log(err)
        ])
    }

    return <>
    <Button onClick={GetAPI}>获取表单</Button>
    <Button onClick={clearJson} >表单清空</Button>
    <Table columns={columns} dataSource={Data}></Table>
    </>
}