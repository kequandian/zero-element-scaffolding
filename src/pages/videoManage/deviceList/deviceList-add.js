import React from 'react';
import ZEle from 'zero-element';
import config from './config/deviceList-add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default () => {
  useBreadcrumb([
    { title: '首页' },
    { title: '视频管理', path: '/serverManage' },
    { title: '添加服务器' }
  ]);
  return (
    <ZEle namespace="deviceList_add" config={config} />
  )
};
