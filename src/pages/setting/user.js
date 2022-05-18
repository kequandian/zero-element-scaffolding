import React from 'react';
import ZEle from 'zero-element';
import config from './config/userConfig';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function Setting() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城配置' },
    { title: '微信用户列表' },
  ]);
  return <ZEle namespace='setting' config={config} />;
}