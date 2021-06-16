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
import { DeleteSvg } from './public/svg'

const endpoint = getEndpoint()
const token = getToken()
function PageRenderAdd(){
    window.onpopstate=function(){
        window.location.href=""
    }
    const JSONRef = useRef()
    const [APIdata,SetAPIdata] = useState([])
    const publicConfig={
        API:"/api/crud/virtualForm/virtualForms/",
        method:"GET",
        field:[
            "formName",
            "version",
            "appDesignData"
        ]
    }
    const saveConfig={
        API:"/api/crud/virtualForm/virtualForms/",
        method:"PUT",
    }
    const [config,setConfig] = useState(publicConfig)
    const [saveconfig,setSaveConfig] = useState(saveConfig)
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
        const {
            API,
            method="PUT",
            field,
        }=saveconfig
        const ALLdata ={
            "appDesignData":JsonValue
        }
        fetch(`${endpoint+API}${getId()}`,{
            // data:ALLdata,
            headers:{
                "Content-Type":"application/json;charset=UTF-8",
                "Authorization":`Bearer ${token}`
            },
            body:ALLdata,
            method:method
        })
        .then(res=>{
            message.success("保存成功，表单名称为"+getInputValue())
            message.success("保存成功，json数据为"+getJsonValue());
        })
        .catch(err=>{
            message.error("获取数据失败"+err)
        })
        console.log(getJsonValue());

    }

    let url = window.location.href

    const getId = () =>{
        let idString = url.split("?")
        // console.log(idString[1]);
        let id = idString[1].replace(/id=/,"")
        // console.log(id);
        return id
    }
    getId()
    const handleDelete = () =>{
        message.warn("删除成功,删除的表单id为"+getId()+",名称为"+getInputValue())
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

        fetch(`${endpoint+API}${getId()}`,{
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
                        for(let i=0;i<field.length;i++){
                           APIdata.push(val.data[field[i]])
                        }
                        setValue(APIdata[0])
                        setVersion(APIdata[1])
                        setJsonValue(APIdata[2])
                        // console.log(version);
                        return value,version,JsonValue
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
    console.log(value);
    return <Flex flex="2">
        <FlexChild>
            <JSONInput defaultValue={JsonValue/* ?JsonValue:`{
}` */} onChange={handleChange} ref={JSONRef} {...Config.textarea}></JSONInput>
        </FlexChild>
        <FlexChild>
            <Sumbit Version={version} value={value} onChange={(e)=>handleInputChange(e)}></Sumbit>
            <div className="ButtonBox">
                <Button text="保存" background="#1B7FBC" flex="1" height="100px" onClick={handleClick}></Button>
                <Button text={<DeleteSvg/>} background="#C10037" width="100px" height="100px" onClick={handleDelete}></Button>
            </div>
        </FlexChild>
    </Flex>
}



ReactDOM.render(<PageRenderAdd/>,document.getElementById("root"))