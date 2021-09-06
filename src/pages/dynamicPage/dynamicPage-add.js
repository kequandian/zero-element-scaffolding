import React,{useRef,useState} from 'react';
import { MainPageConfig } from './config/dynamicPage-add';
import useBreadcrumb from '@/framework/useBreadcrumb';
import FormTools from '@/container/EditList/components/Form';
import ShowModal from '@/container/EditList/components/showModal';
import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { message,Drawer } from 'antd';
import setting from './config/dynamicPage-setting.json'
import {history} from 'umi'
import { AddSvg } from '@/container/EditList/svg';

export default function DynamicPageAdd(props){
const {
}=props
useBreadcrumb([
    { title: '首页', path: '/' },
    { title: '动态页面新增' },
  ]);
  const addRef = useRef()
  const api = setting.createAPI
  function addMessage(){
    let theData;
    let endpoint = getEndpoint()
    const apiUrl = `${endpoint}${api}`;
    let options = {
      method:"POST"
    }
    theData = {
      ...addRef.current.data
    }
    // console.log(theData,"提交后的DATA")
    promiseAjax(apiUrl,theData,options)
    .then(resp => {
      if (resp && resp.code === 200) {
        // const Listdata = resp.data.records;
        // console.log(resp)
        message.success("添加成功")
        history.goBack(1)
        // setData(Listdata)
      } else {
        message.error('添加失败')
      }
    })
  }
  const onClose = () => {
    history.goBack(1)
  };
return <ShowModal title={"添加页面"}
    // icon={<AddSvg/>}
    width="100%"
    height="100%"
    initShow={true}
    onSuccess={addMessage}
    onError={onClose}
  >
    <FormTools
      config={MainPageConfig}
      ref={addRef}
    ></FormTools>
  </ShowModal>

}