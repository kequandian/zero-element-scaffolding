import React from 'react';
import ZEle from 'zero-element';
import config from './config/meetingList-add';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default () => {
  useBreadcrumb([
    { title: '首页' },
    { title: '视频管理', path: '/serverManage' },
    { title: '添加会议' }
  ]);
  return (
    <ZEle namespace="meetingList_add" config={config} />
  )
};
