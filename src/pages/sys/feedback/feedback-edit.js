
import React from 'react';
import ZEle from 'zero-element';
import config from './config/feedback-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default function () {

    useBreadcrumb([
      { title: '首页' },
      {
        title: "信息反馈",
        path: '/feedback'
      },
      { title: '处理投诉' }
    ]);
  
    return <div>
     <ZEle namespace="feedback-edit" config={config} />
    </div>
  }
