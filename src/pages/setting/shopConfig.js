import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/shopConfig';

export default function ShopConfig() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城配置' },
    { title: '商城配置' },
  ]);
  return <ZEle namespace='shopConfig' config={config} />;
}