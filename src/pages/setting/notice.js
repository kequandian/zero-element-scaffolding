import React from 'react';
import ZEle from 'zero-element';
import config from './config/Notice/index.config';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function Notice() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城配置' },
    { title: '公共管理' },
  ]);
  return <ZEle namespace='notice' config={config} />;
}
