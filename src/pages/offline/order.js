import React from 'react';
import ZEle from 'zero-element';
import config from './config/offlineConfig';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function OfflineOrder() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '线下管理' },
    { title: '线下订单' },
  ]);
  return <ZEle namespace='offline_order' config={config} />;
}
