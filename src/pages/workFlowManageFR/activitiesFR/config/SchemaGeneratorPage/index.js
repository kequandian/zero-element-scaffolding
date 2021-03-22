import React, { useState, useEffect } from 'react';
import Generator from 'fr-generator';
import copyTOClipboard from 'copy-text-to-clipboard';

import { defaultSettings, defaultCommonSettings, defaultGlobalSettings } from './settings';

import { setPageData, getPageData, clearPageData, getHooks } from 'zero-element/lib/Model';

import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

import { widgets as customWidgets } from './components';

// const defaultValue = {
//   schema: {
//     type: 'object',
//     properties: {
//       inputName: {
//         title: '简单输入框',
//         type: 'string',
//       },
//     },
//   },
//   displayType: 'row',
//   showDescIcon: true,
//   labelWidth: 120,
// };
const templates = [
  {
    text: '模板1',
    name: 'something',
    schema: {
      title: '对象',
      description: '这是一个对象类型',
      type: 'object',
      properties: {
        inputName: {
          title: '简单输入框',
          type: 'string',
        },
        selectName: {
          title: '单选',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['早', '中', '晚'],
        },
        dateName: {
          title: '时间选择',
          type: 'string',
          format: 'date',
        },
      },
    },
  },

];

const Demo = (props) => {

  const { subData } = props;

  const { API, custActivityId } = subData;

  const [submitData, setSubmitData] = useState('');

  useEffect(_ => {
    setSubmitData(subData);
  }, [submitData])


  function createFR(submitData) {
    const apiUrl = `${getEndpoint()}${API.createAPI}`
    const queryData = submitData;
    handleRequest(apiUrl, queryData, {method:'POST'})
  }

  function updateFR(submitData) {
    const createAPI = API.createAPI;
    const formatApi = createAPI.replace('(id)', custActivityId);
    const apiUrl = `${getEndpoint()}${formatApi}`
    const queryData = submitData;
    handleRequest(apiUrl, queryData, {method:'PUT'})
  }

  function handleRequest(apiUrl, queryData, other) {
    promiseAjax(apiUrl, queryData, other)
      .then(resp => {
        if (resp && resp.code === 200) {
          console.log("保存成功")
        } else {
          console.log('保存失败')
        }
      })
  }

  function onSubimit(schema) {
    submitData.tableJson = strToJson(schema);
    if (API.createAPI) {
      createFR(submitData);
    } else if (API.updateAPI) {
      updateFR(submitData);
    }
  }

  const customBtns = [
    false, true, false, true,
    {
      text: '保存',
      saveClick: (schema) => {
        // copyTOClipboard(schema);
        // submitData.frJson = strToJson(schema);
        // setSubmitData(submitData);
        // console.log(schema);
        // alert("复制成功")
        // console.log('submitData = ', submitData)
        // setPageData(namespace, 'formData', submitData);
        onSubimit(schema)
      },
    },
  ]

  function strToJson(str) {
    var json = eval('(' + str + ')');
    return json;
  }

  return (
    <div style={{ height: '100vh' }}>
      <Generator
        widgets={customWidgets}
        settings={defaultSettings}
        commonSettings={defaultCommonSettings}
        globalSettings={defaultGlobalSettings}
        extraButtons={customBtns} />
    </div>
  );
};
export default Demo;