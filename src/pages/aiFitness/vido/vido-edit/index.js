import React from 'react';
import ZEle from 'zero-element';
import config from './config';
import qs from 'qs';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function salesChancEdit({ location }) {
  const { id } = qs.parse(location.search.replace('?', ''));
  useBreadcrumb([
    { title: '首页', path: '/admin' },
    { title: '视频管理',path:'/aiFitness/vido'},
    { title: '编辑视频信息'}
]);
  return <div>
    <ZEle
      namespace="vido-edit"
      config={config}
      extraData={{
        id,
      }}
    />
  </div>
}