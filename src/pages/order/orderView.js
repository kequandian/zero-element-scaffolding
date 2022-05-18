import React from 'react';
import ZEle from 'zero-element';
import config from './config/orderView-config';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function OrderView() {
    useBreadcrumb([
        { title: '主页', path: '/' },
        { title: '订单详情' }
      ]);
    return <ZEle namespace="order_view" config={config} />;
}