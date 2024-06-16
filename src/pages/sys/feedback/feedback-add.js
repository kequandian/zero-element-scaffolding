
import React from 'react';
import ZEle from 'zero-element';
import config from './config/feedback-add';
import useBreadcrumb from "@/framework/useBreadcrumb"

export default () => {

  useBreadcrumb([{
      title: '首页',
      path: '/'
    },
    {
      title: "信息反馈",
      path: '/feedback'
    },
    {
      title: "添加投诉类型"
    }
  ]);
  return <ZEle namespace="feedback-add" config={config} />
}
