/* eslint-disable no-unused-vars */
import zeroAntd from './zero-antd-dep';

import { history } from 'umi';
import { getModel } from 'zero-element/lib/Model';

import { set as golbalSet } from 'zero-element/lib/config/global';
import { set as APIConfig } from 'zero-element/lib/config/APIConfig';

import { set as setEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { saveToken, removeToken } from 'zero-element/lib/utils/request/token';

import { set as LayoutSet } from 'zero-element/lib/config/layout';
import { set as CSet } from 'zero-element/lib/config/container';
import { set as LASet } from 'zero-element/lib/config/listAction';
import { set as FITSet } from 'zero-element/lib/config/formItemType';
import { set as AITSet } from 'zero-element/lib/config/actionItemType';
import { set as VTSet } from 'zero-element/lib/config/valueType';

import path from '@/pages/dynamicPageTool/actionItemType/path';
// import onPath from '@/../zero-antd-dep/listAction/onPath';
//动态页面组件
import EditList from '@/pages/dynamicPageTool/container/EditList/index';
import AITSet_FromModal from '@/pages/dynamicPageTool/actionItemType/FromModal';

import { message } from 'antd';

import './rewrite.less';

//配置 
import { Config } from './devConfig'
const globalModel = getModel('global');

APIConfig({
  'DEFAULT_current': 1,
  'DEFAULT_pageSize': 10,

  'REQUEST_FIELD_current': 'pageNum',
  'REQUEST_FIELD_pageSize': 'pageSize',
  'REQUEST_FIELD_field': 'orderBy',
  'REQUEST_FIELD_order': 'sort',
  'REQUEST_FIELD_ascend': 'ASC',
  'REQUEST_FIELD_descend': 'DESC',

  'RESPONSE_FIELD_current': 'current',
  'RESPONSE_FIELD_pageSize': 'size',
  'RESPONSE_FIELD_total': 'total',
  'RESPONSE_FIELD_records': 'records',
});
golbalSet({
  router: (path) => {
    history.push(path);
  },
  goBack: () => {
    history.goBack();
  },
  Unauthorized: (data) => {
    removeToken();
    history.push('/401');
  },
  getPerm() {
    return globalModel.getPerm();
  },
  RequestError: (props) => {
    const { data = {} } = props
    if (data.errors && data.errors.length) {
      data.errors.forEach(msg => {
        message.error(JSON.stringify(msg));
      })
    } else {
      message.error(data.message || '无法连接服务器');
    }
  }
});

/** 
 * @开发环境配置
 * @关于Config配置 配置来源 src/devConfig.js > endpoint 项
 * @优先级 src/devConfig.js 中 endpoint 高于 public/config.js 中 window.ZEle.endpoint
 * @说明 此地方不设置生产环境endpoint设置 默认为public/config.js 中的 window.ZEle.endpoint 值
*/

if (process.env.NODE_ENV === 'development') {
  //# $ cat /c/Windows/System32/drivers/etc/hosts
  //# 192.168.3.239:8090 demo.smallsaas.cn:8080
  // setEndpoint('http://cn1.utools.club:45688');
  setEndpoint(Config.endpoint);
  // setEndpoint('http://localhost:8080');
  saveToken({
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NjczNTQ0MzYsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NzYxMzYzNn0.qULp2dw5_oLrFYYTDakpD0onZAiQ4Eo5OOJczD7qWN0Q8ZNSw6frFihGxD1tM4J22wEDEd4dK7gqaA05SBitjA',
  });
}else {
  // setEndpoint('http://localhost:8080');
  // setEndpoint('http://192.168.3.239:8090');
}

LayoutSet({
  // Content,
});

CSet({
  'EditList':EditList,
});

LASet({
  'onFromModal': AITSet_FromModal,
});

//表单组件
FITSet({
});

//  
AITSet({
  path,
  'fromModal': AITSet_FromModal,
});

//列表 & 详情
VTSet({
});
