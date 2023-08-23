import React, { useState } from 'react';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import useBreadcrumb from '@/framework/useBreadcrumb';
import ZEle from 'zero-element';
import config from './config/index';

export default function () {

  useBreadcrumb([
    { title: '首页', path: '' },
    { title: '运维管理', path: '/devops' },
    { title: '生成api代码管理' },
  ]);


  useDidMount(_ => {
  });

  useWillUnmount(_ => {
  });

  return <ZEle namespace="codeGenerator" config={config} />;
}