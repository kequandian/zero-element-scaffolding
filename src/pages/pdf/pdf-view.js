import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import useBreadcrumb from "@/framework/useBreadcrumb"
let pageConfig = require("@/../public/setting.json")

export default () => {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: "PDF页详情"}
    ]);
  return <DetailsTemplate
  namespace={`${pageConfig.pageName.name||"default"}_view`}
  setting={pageConfig}
  config={pageConfig.viewConfig}
/>
}
    
