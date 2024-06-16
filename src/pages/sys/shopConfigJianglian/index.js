import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/shopConfig';

export default function ShopConfig() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城管理', path: '/mallManage' },
    { title: '匠链配置' },
  ]);
  return <ZEle namespace='shopConfigJianglian' config={config} />;
}