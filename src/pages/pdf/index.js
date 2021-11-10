import React, { useState, useEffect } from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';

import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import promiseAjax from '@/utils/promiseAjax';
import { Config } from '@/devConfig';
import {message,Spin} from 'antd'

export let theConfig = {

}
export default function Default() {
    useBreadcrumb([
      { title: '首页', path: '/' },
      { title: '测试动态页面加载' },
    ]);
    
    const [pageConfig, setPageConfig] = useState('')
    useDidMount(_ => {
      let endpoint = getEndpoint()
      const defaultUrl = `${endpoint}/getPageJson`;//默认配置获取地址
        promiseAjax(defaultUrl,{})
        .then(rp=>{
            setPageConfig(rp)
        }).catch(err=>{
            // message.error('获取页面配置信息失败')
        })
    })
    if(pageConfig){
      theConfig = pageConfig
      const config = {
        layout: pageConfig.layout.table,
        title: pageConfig.pageName.table,
        config:{
          style:{
            "min-width":pageConfig.minWidth
          }
        },
        items: [
          {
            component: pageConfig.searchType||'Search',
            config: {
              type:pageConfig.searchButtonType||"default",
              fields: pageConfig.searchFields,
            },
          },
          {
            component: 'Table',
            config: {
              API: {
                listAPI: pageConfig.listAPI,
                deleteAPI: pageConfig.deleteAPI,
              },
              actions: pageConfig.tableActions,
              fields: pageConfig.tableFields,
              operation: pageConfig.tableOperation,
            },
          },
        ],
      }
      return <ZEle namespace={`${pageConfig.pageName.name||"default"}_page`} config={config} />;
    }else{
      return <Spin spinning={true} tip={"加载中"}></Spin>
    }
 } 

