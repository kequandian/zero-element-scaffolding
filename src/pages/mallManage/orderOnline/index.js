import React from 'react';
import ZEle from 'zero-element';
import config from './config/onlineConfig';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function Online() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城管理', path: '/mallManage' },
    { title: '线上订单' },
  ]);
  return <ZEle namespace='order_online' config={config} />;
}
