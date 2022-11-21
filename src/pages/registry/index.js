import React ,{useState}from 'react';
import ZEle from 'zero-element';
const setting = require('./config/registry-setting.json');
import { query,post } from 'zero-element/lib/utils/request';
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle';

export default function () {
  const [spining, setSpining] = useState(true)
  let options = {
    method:"POST"
  }
  const jsonMockUrl = "http://house.cloud.smallsaas.cn/form/101020"
  useDidMount(_ => {
    initPageData()
});

function setRegister(data){
  post(jsonMockUrl,data,options)
  .then(resp => {
    setSpining(false)
    const response = resp.data
    if (response && response.code === 200) {

        // setTips("加载完成")

    } else {
        message.error('获取仓库信息失败')
        // setTips("加载完成")
    }
  }).catch(err => {
    setSpining(false)
    message.error('获取仓库信息失败')
  })
}

function initPageData(){
  const registryUrl = "http://192.168.3.45:5000/v2/_catalog"
  query(registryUrl, {})
  .then(resp => {
    setSpining(false)
    const response = resp.data
    if (response && response.code === 200) {
        const configData = response.data;

        setRegister(configData)
        // setTips("加载完成")

    } else {
        message.error('获取仓库信息失败')
        // setTips("加载完成")
    }
  }).catch(err => {
    setSpining(false)
    message.error('获取仓库信息失败')
  })
}

  const config = {

    layout: setting.layout.table,
    title: setting.pageName.table,
    items: [
      {
        component: 'Search',
        config: {
          fields: setting.searchFields,
        },
      },
      {
        component: 'Table',
        config: {
          API: {
            listAPI: setting.listAPI,
            appendAPI: '',
            deleteAPI: setting.deleteAPI,
          },
          actions: setting.tableActions,
          fields: setting.tableFields,
          operation: setting.tableOperation,
        },
      },
    ],
  }

	return <ZEle namespace="registry" config={config} />
  }