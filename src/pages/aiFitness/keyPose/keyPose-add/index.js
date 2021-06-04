import React from 'react';
import ZEle from 'zero-element';
import config from './config';
import qs from 'qs';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function salesChancEdit({ location }) {
  const { id } = qs.parse(location.search.replace('?', ''));
  useBreadcrumb([
    { title: '首页', path: '/admin' },
    { title: '标准动作',path:'/aiFitness/keyPose'},
    { title: '新增动作'}
  ]);
  return <div>
    <ZEle
      namespace="keyPose-add"
      config={config}
      extraData={{
        id,
      }}
    />
  </div>
}