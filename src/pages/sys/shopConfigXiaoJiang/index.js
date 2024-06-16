import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/shopConfig';

export default function ShopConfig() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城管理', path: '/mallManage' },
    { title: '小匠商城配置' },
  ]);
  return <ZEle namespace='shopConfigXiaoJiang' config={config} />;
}