import React,{useRef,useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Config} from './config/add-config'
import {JSONInput,getValue as getJsonValue} from './components/JSONInput'
import {Flex,FlexChild} from './layout/flex'
import './public/index.less'
import Sumbit,{getValue as getInputValue} from './components/Sumbit'
import Button from './components/Button'
import {message} from 'antd'
import { getToken } from 'zero-element/lib/utils/request/token';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';


function PageRenderAdd(){
    window.onpopstate=function(){
        window.location.href=""
    }
    const JSONRef = useRef()
    const [APIdata,SetAPIdata] = useState([])
    const publicConfig={
        API:"/api/adm/users/userInfo",
        method:"GET",
        field:[
            "orgs",
            "version",
            "phone"
        ]
    }
    const [config,setConfig] = useState(publicConfig)
    const [version,setVersion] = useState(APIdata[1])
    const [value,setValue] = useState(APIdata[0])
    const [JsonValue,setJsonValue]=useState(APIdata[2])
    const handleChange= ()=>{
        // console.log(JSONRef.current.value);
    }

    const handleInputChange= (e)=>{
        // console.log(e.target.value);
    }

    const handleClick = () =>{
        // console.log(getData(publicConfig))
        // console.log(version);
        // console.log(getData(tableNameconfig))
        // console.log(getData(Versionconfig))
        message.success("保存成功，表单名称为"+getInputValue())
        message.success("保存成功，json数据为"+getJsonValue());
    }

    const getData = (initConfig) =>{
        setConfig(initConfig)
        // console.log(APIdata);
        const theData=APIdata
        // console.log(Version);
        return theData
    }

    useEffect(() => {
        const {
            API,
            method="GET",
            data,
            field,
        }=config
        const endpoint = getEndpoint()
        const token = getToken()
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
            // console.log(json);
            Promise.resolve(json).then((val)=>{
                // console.log(val.code)
                if(val.code===200){
                    if(field===undefined){
                        console.log("未获取到field字段");
                    }else{
                        // console.log(val);
                        for(let i=0;i<field.length;i++){
                           APIdata.push(val.data[field[i]])
                        }
                        setValue(APIdata[0])
                        setVersion(APIdata[1])
                        setJsonValue(APIdata[2])
                        // console.log(version);
                        return APIdata,version,JsonValue
                    }
                }else{
                    message.error("获取数据失败"+val.code)
                }
            })
        })
        .catch(err=>{
            message.error("获取数据失败"+err)
        })
    },[])

    return <Flex flex="2">
        <FlexChild>
            <JSONInput defaultValue={JsonValue/* ?JsonValue:`{
}` */} onChange={handleChange} ref={JSONRef} {...Config.textarea}></JSONInput>
        </FlexChild>
        <FlexChild>
            <Sumbit Version={version} value={value} onChange={(e)=>handleInputChange(e)}></Sumbit>
            <div className="ButtonBox">
            <Button text="保存" onClick={handleClick} background="#1B7FBC"></Button>
            </div>
        </FlexChild>
    </Flex>
}



ReactDOM.render(<PageRenderAdd/>,document.getElementById("root"))