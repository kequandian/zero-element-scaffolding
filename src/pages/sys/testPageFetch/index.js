import React, { useState, useEffect } from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import { 
  fieldsConfig,
  MainPageConfig,
  ComponentTypeConfig,
  FiltersConfig,
  OperationsConfig,
  ActionsConfig
} from './pageConfig';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import promiseAjax from '@/utils/promiseAjax';
import {
  PageSvg,
  ActionSvg,
  OperationSvg,
  FIlterSvg,
  FieldSvg,
  FieldProperitieSvg
} from './svg/index'
import {message} from 'antd'
export default function () {
    useBreadcrumb([
      { title: '首页', path: '/' },
      { title: '测试动态页面加载' },
    ]);
    
    const [pageConfig, setPageConfig] = useState('')
    const [pageId,setPageId] = useState(0)
    let pageEndpoint = "/api/crud/lowMainPage/lowMainPages"
    let id;
    const getParams = () =>{
      var array = window.location.href.split("?");   
      if ((parseInt(array.length) - parseInt(1)) > 0) {   
           var array1 = array[1].split("&");   
           if (array1.length > 0) {   
              //  console.log(array1)
               for(var i in array1){
                 console.log(array1[i])
                 if(array1[i].indexOf("id=")!==-1){
                 console.log(array1[i].split("id=")[1])
                 id = array1[i].split("id=")[1]
                 }
               }
           }   
       } 
    }
    getParams()

    useDidMount(_ => {
      const apiUrl = `/api/config`;
      // const apiUrl = `https://api.mock.smallsaas.cn/data`;
      const queryData = {
        id:1
      };
      promiseAjax(apiUrl, queryData)
        .then(resp => {
          if (resp.status===1) {
            const data = resp.data;
            setPageConfig(data)
          } else {
            console.error('获取页面配置信息失败')
          }
        })
      let endpoint = getEndpoint()
      const pageUrl = `${endpoint}${pageEndpoint}/${id}`;
        // const apiUrl = `/api/test`;

      promiseAjax(pageUrl,{})
      .then(resp => {
        if (resp && resp.code === 200) {
          const Listdata = resp.data;
          // message.success("加载成功")
          setPageId(Listdata.id)
        } else {
          message.error('获取页面配置信息失败')
        }
      }).catch(err=>{
          // message.error('获取页面配置信息失败')
      })
    });

    if(pageConfig){
      const config = {
        layout: pageConfig.layout.table,
        title: pageConfig.pageName.table,
        items: [

          // {
          //   component:"EditList",
          //   config:{
          //     api:"/api/crud/lowFieldProperties/lowFieldPropertieses",//lc_field_properties
          //     ModelConfig:ComponentTypeConfig,
          //     title:"propertyName",
          //     field:"fieldItemName",
          //     name:"组件属性",
          //     svg:<FieldProperitieSvg/>
          //   }
          // },
          {
            component:"EditList",
            config:{
              api:"/api/crud/lowFields/lowFieldses",//lc_fields
              ModelConfig:fieldsConfig,
              title:"fieldLabel",
              name:"字段",
              PageId:id,
              showAdd:true,
              svg:<FieldSvg/>
            }
          },
          {
            component:"EditList",
            config:{
              api:"/api/crud/lowOperations/lowOperationses",//lc_operations
              ModelConfig:OperationsConfig,
              title:"title",
              name:"操作",
              PageId:id,
              showAdd:true,
              svg:<OperationSvg/>
            }
          },
          {
            component:"EditList",
            config:{
              api:"/api/crud/lowActions/lowActionses",//lc_actions
              ModelConfig:ActionsConfig,
              title:"title",
              name:"按钮",
              PageId:id,
              showAdd:true,
              svg:<ActionSvg/>
            }
          },
          {
            component:"EditList",
            config:{
              api:"/api/crud/lowFilters/lowFilterses",//lc_filters
              ModelConfig:FiltersConfig,
              title:"fieldTitle",
              name:"过滤",
              PageId:id,
              showAdd:true,
              svg:<FIlterSvg/>
            }
          },
          {
            component:"EditList",
            config:{
              api:`${pageEndpoint}`,//lc_main_pages
              ModelConfig:MainPageConfig,
              title:"pageTitle",
              name:"页面配置",
              projectId:id,
              showAdd:false,
              showDelete:false,
              NoModal:true,
              svg:<PageSvg/>
            }
          },
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
