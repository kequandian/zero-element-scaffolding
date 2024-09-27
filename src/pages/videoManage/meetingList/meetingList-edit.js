import React from 'react';
import ZEle from 'zero-element';
import config from './config/meetingList-edit';
import useBreadcrumb from '@/framework/useBreadcrumb';

export default () => {
  useBreadcrumb([
    { title: '首页' },
    { title: '视频管理', path: '/serverManage' },
    { title: '编辑会议' }
  ]);
  return (
    <ZEle namespace="meetingList_edit" config={config} />
  )
};
