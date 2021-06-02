import useBreadcrumb from '@/framework/useBreadcrumb';
import React from 'react';
import ZEle from 'zero-element';
import config from './config';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '/admin' },
    { title: '视频管理' },
  ]);

  return <div>
    <ZEle
      namespace="vido"
      config={config}
    />
  </div>
}