import React from 'react';
import ZEle from 'zero-element';
import config from './config/AdGroup/index.config';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function AdGroup() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城配置' },
    { title: '广告组配置' },
  ]);
  return <ZEle namespace='adGroup' config={config} />;
}
