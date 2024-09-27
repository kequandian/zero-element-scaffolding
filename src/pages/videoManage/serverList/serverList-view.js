import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/serverList-setting';
import useBreadcrumb from '@/framework/useBreadcrumb';
    
export default () => {
  useBreadcrumb([
    { title: '首页' },
    { title: '视频管理', path: '/serverManage' },
    { title: '查看服务器' }
  ]);
  return <DetailsTemplate
    namespace="serverList_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
