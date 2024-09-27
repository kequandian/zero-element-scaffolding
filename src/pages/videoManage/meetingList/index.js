import React from 'react';
import ZEle from 'zero-element';
import config from './config/index';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default () => {
  useBreadcrumb([
    { title: '首页' },
    { title: '视频管理', path: '/videoManage' },
    { title: '会议列表' }
  ]);
  return (
    <ZEle namespace="menuManage" config={config} />
  )
};
