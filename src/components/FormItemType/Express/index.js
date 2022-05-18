import React,{useRef,useState} from 'react'
import {history} from 'umi'
import {Input,Button,message} from 'antd'
import promiseAjax from '@/utils/promiseAjax'
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import SearchCompany from './components/searchCompany'
import ExpressList from './components/expressList';
import "./index.less"
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle';

export default function Express(props){
    const {
        value
    }=props
    const selectRef = useRef()
    const InputRef = useRef()
    const endpoint = getEndpoint()
    // function handleInput(e){
    //     console.log(InputRef.current.input.value)
    //     console.log(selectRef.current.value,"SELECT")
    // }
    const [loading,setLoading] = useState(false)
    const [text,setText] = useState("开始发货")
    const [listData,setListData] = useState([])
    const [isDisabled,setIsDisabled] = useState(false)
    const [TableLoading,setTableLoading] = useState(false)

    function GetId(){
        let url = window.location.href;
        let id = url.slice(url.indexOf('?') + 4);
        return id
    }
    
    useDidMount(_=>{
        if(value==="CONFIRMED_DELIVER_PENDING"){
            setText("开始发货")
            setIsDisabled(false)
        }else if(value==="DELIVERED_CONFIRM_PENDING"){
            setText("更改发货编号")
            setIsDisabled(false)
        }else{
            setText("状态错误")
            setIsDisabled(true)
        }
        setTableLoading(true)
        let id = GetId()
        let data = {}
        let url = `${endpoint}/api/crud/order/orders/orderExpress/${id}`
        promiseAjax(url,data).then(res=>{
            setTableLoading(false)
            if(res.code===200){
                setListData(res.data.data)
            }
        }).catch(err=>{
            setTableLoading(false)
        })
    })

    function StartExpress(){
        setText("发货中")
        setLoading(true)
        let id = GetId()
        let data = {
            "id":id,
            "expressId":selectRef.current.value,
            "expressNumber":InputRef.current.input.value
        }
        let options = {
            method:"POST"
        }
        let url = `${endpoint}/api/crud/order/orders/deliver`
        promiseAjax(url,data,options).then(res=>{
            if(res.code===200&&res.message==="Success"){
                message.success("发货成功！")
                history.go(0)
            }else{
                message.error("发货失败")
            }
            setLoading(false)
            if(value==="CONFIRMED_DELIVER_PENDING"){
                setText("开始发货")
                setIsDisabled(false)
            }else if(value==="DELIVERED_CONFIRM_PENDING"){
                setText("更改发货编号")
                setIsDisabled(false)
            }else{
                setText("状态错误")
                setIsDisabled(true)
            }
        })
    }

    return <>{value==="CONFIRMED_DELIVER_PENDING"||value==="DELIVERED_CONFIRM_PENDING"?<div className="Express_Box">
    <div className="ExpressCompany">
    <SearchCompany ref={selectRef}>
    </SearchCompany>
    </div>
    <Input ref={InputRef} style={{width:"500px"}}/>
    <Button onClick={StartExpress} type="primary" disabled={isDisabled} loading={loading}>{text}</Button>
    </div>:null}
    <ExpressList data={listData} loading={TableLoading}>
    </ExpressList>
    </>
}