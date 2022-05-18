import React from 'react';
import ZEle from 'zero-element';
import config from './config/refundConfig';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function Refund() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '订单管理' },
    { title: '退货处理' },
  ]);
  return <ZEle namespace='order_refund' config={config} />;
}

