import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import OrderAdd from '@/pages/offline/config/Add/add';

export default (props) => {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '订单管理' },
    { title: '线下订单', path: '/offline/order' },
    { title: '添加线下订单' },
  ]);

  return <OrderAdd />;
}