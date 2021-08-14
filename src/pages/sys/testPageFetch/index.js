import React, { useState, useEffect } from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';

import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import promiseAjax from '@/utils/promiseAjax';

export default function () {
    useBreadcrumb([
      { title: '首页', path: '/' },
      { title: '测试动态页面加载' },
    ]);

    const [pageConfig, setPageConfig] = useState('')

    useDidMount(_ => {
      // const apiUrl = `/api/config`;
      const apiUrl = `https://api.mock.smallsaas.cn/data?id=1`;
      const queryData = {
      };
      promiseAjax(apiUrl, queryData)
        .then(resp => {
          if (resp && resp.code === 200) {
            const data = resp.data;
            setPageConfig(data)
          } else {
            console.error('获取页面配置信息失败')
          }
        })
    });

    if(pageConfig){
      const config = {
        layout: pageConfig.layout.table,
        title: pageConfig.pageName.table,
        items: [
          {
            component: 'Search',
            config: {
              type:"default",
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
      return <ZEle namespace="test_page" config={config} />;
    }else{
      return null
    }
 } 
