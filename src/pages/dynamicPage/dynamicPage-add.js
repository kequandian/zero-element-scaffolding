import React from 'react';
import ZEle from 'zero-element';
import config from './config/dynamicPage-add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function DynamicPageAdd(props){
const {
}=props
useBreadcrumb([
    { title: '首页', path: '/' },
    { title: '动态页面新增' },
  ]);
return <ZEle namespace="testField_add" config={config} />;
}