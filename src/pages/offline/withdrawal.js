import React from 'react';
import ZEle from 'zero-element';
import config from './config/withdrawalConfig';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function Withdrawal() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '线下管理' },
    { title: '线下提现' },
  ]);
  return <ZEle namespace='offline_withdrawal' config={config} />;
}
