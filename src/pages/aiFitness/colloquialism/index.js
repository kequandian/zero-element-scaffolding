import React from 'react';
import ZEle from 'zero-element';
import config from './config';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {
  useBreadcrumb([
    { title: '首页', path: '/admin' },
    { title: '纠正话术管理'}
  ]);
  return <div>
    <ZEle
      namespace="colloquialism"
      config={config}
    />
  </div>
}