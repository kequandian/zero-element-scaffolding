import React, { useState } from 'react';
import ZEle from 'zero-element';
import qs from 'qs';
import { message, Spin } from 'antd'
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { query } from 'zero-element/lib/utils/request';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

import { pageUrl } from './config';

export default (props) => {

    const routeParam = window.location.search.replace('?', '');
    
    const [pageConfig, setPageConfig] = useState('')
    const [spining, setSpining] = useState(true)
    // const [tips, setTips] = useState("获取数据中")

    useDidMount(_ => {
        initPageConfig()
    });

    function initPageConfig() {
        let endpoint = getEndpoint()
        let pageConfigUrl = pageUrl

        if(!pageUrl.startsWith('http')){
          pageConfigUrl = `${endpoint}${pageUrl}`
        }

        if(pageUrl.indexOf('?') != -1){
          //TODO, merge routeParam with this pageUrl param
        }else{
          pageConfigUrl = `${pageConfigUrl}?${routeParam}`
        }

        console.log('pageConfigUrl == ', pageConfigUrl)

        query(pageConfigUrl, {})
          .then(resp => {
            setSpining(false)
            const response = resp.data
            if (response && response.code === 200) {
                const configData = response.data;
                setPageConfig(configData)
                // setTips("加载完成")

            } else {
                message.error('获取页面配置信息失败')
                // setTips("加载完成")
            }
          }).catch(err => {
            setSpining(false)
            message.error('获取页面配置信息失败')
          })
    }

    if(pageConfig){
        const config = {
            layout: pageConfig.layout.table,
            title: pageConfig.pageName.table,
            items: [
              {
                component: 'Search',
                config: {
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

        return (
            <ZEle namespace="dynamicPage" config={config} />
        )
    } else {
        return <Spin spinning={spining} ></Spin>
    }


   
};
