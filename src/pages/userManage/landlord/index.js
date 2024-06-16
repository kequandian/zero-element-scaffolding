import React from 'react';
import ZEle from 'zero-element';
import config from './config/userConfig';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function Setting() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '用户管理', path: '/userManage' },
    { title: '房东列表' },
  ]);
  return <ZEle namespace='landlord_user' config={config} />;
}