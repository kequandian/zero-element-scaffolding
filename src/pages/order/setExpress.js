import React from 'react';
import ZEle from 'zero-element';
import config from './config/setExpressConfig';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function SetExpress() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '订单管理' },
    { title: '快递设置' },
  ]);
  return <ZEle namespace='order_setExpress' config={config} />;
}
