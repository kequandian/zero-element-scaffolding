/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ZEle from 'zero-element';
import config from './config';
import qs from 'qs';
import useBreadcrumb from '@/framework/useBreadcrumb';
export default function salesChancEdit({ location }) {
  const { id } = qs.parse(location.search.replace('?', ''));
  useBreadcrumb([
    { title: '首页', path: '/admin' },
    { title: '纠正话术管理',path:'/aiFitness/colloquialism'},
    { title: '编辑话术模型'}
]);
  return <div>
    <ZEle
      namespace="colloquialism-edit"
      config={config}
      extraData={{
        id,
      }}
    />
  </div>
}