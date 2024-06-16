import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import Page from '../../../layouts/Page'
import Return from './components/Return'
import { Flex, FlexChild } from './layout/flex'

// 测试配置
import {ViewConfig} from './config/view-config'


function PageRender_View(){
    const [flex,setFlex]=useState();
    // 回退自动刷新
    window.onpopstate=function(){
        window.location.href=""
    }
    // 页面自动布局代码
    window.onload = function(){
        if(document.body.clientWidth>=3460){
            setFlex("10")
        }else if(document.body.clientWidth>=3118&&document.body.clientWidth<3460){
            setFlex("9")
        }else if(document.body.clientWidth>=2776&&document.body.clientWidth<3118){
            setFlex("8")
        }else if(document.body.clientWidth>=2434&&document.body.clientWidth<2776){
            setFlex("7")
        }else if(document.body.clientWidth>=2092&&document.body.clientWidth<2434){
            setFlex("6")
        }else if(document.body.clientWidth>=1750&&document.body.clientWidth<2092){
            setFlex("5")
        }else if(document.body.clientWidth>=1408&&document.body.clientWidth<1750){
            setFlex("4")
        }else if(document.body.clientWidth>=1066&&document.body.clientWidth<1408){
            setFlex("3")
        }else if(document.body.clientWidth>=724&&document.body.clientWidth<1066){
            setFlex("2")
        }else if(document.body.clientWidth<724){
            setFlex("1")
        }
    }
    // 页面自动布局代码
    window.onresize = function(){
        if(document.body.clientWidth>=3460){
            setFlex("10")
        }else if(document.body.clientWidth>=3118&&document.body.clientWidth<3460){
            setFlex("9")
        }else if(document.body.clientWidth>=2776&&document.body.clientWidth<3118){
            setFlex("8")
        }else if(document.body.clientWidth>=2434&&document.body.clientWidth<2776){
            setFlex("7")
        }else if(document.body.clientWidth>=2092&&document.body.clientWidth<2434){
            setFlex("6")
        }else if(document.body.clientWidth>=1750&&document.body.clientWidth<2092){
            setFlex("5")
        }else if(document.body.clientWidth>=1408&&document.body.clientWidth<1750){
            setFlex("4")
        }else if(document.body.clientWidth>=1066&&document.body.clientWidth<1408){
            setFlex("3")
        }else if(document.body.clientWidth>=724&&document.body.clientWidth<1066){
            setFlex("2")
        }else if(document.body.clientWidth<724){
            setFlex("1")
        }
    }

    return <div className="Page_body">
        <div className="head">
            <h1 className="head_title">页面设计详情</h1>
            <Return url="/designpage/config" color="#eee"></Return>
        </div>
        <div className="body">
            <Flex flex={flex}>
            {ViewConfig.map((text,i)=>{
                return <FlexChild>
                <Page title={text.name} id={text.id} version={text.version} json={text.json}></Page>
            </FlexChild>
            })}
            </Flex>
        </div>
    </div>
}
ReactDOM.render(<PageRender_View/>,document.getElementById("root"))

