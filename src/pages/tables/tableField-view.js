import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/dateTables-setting';
import useBreadcrumb from "@/framework/useBreadcrumb"

export default () => {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项',path:'/designpage/config'},
        { title: "报表管理",path:'/tables'},
        { title: "报表详情"}
    ]);
  return <DetailsTemplate
    namespace="tableField_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
