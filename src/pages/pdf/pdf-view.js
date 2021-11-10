import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import useBreadcrumb from "@/framework/useBreadcrumb"
import { theConfig } from './index';


export default () => {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: "PDF页详情"}
    ]);

  

  return <DetailsTemplate
  namespace={`${theConfig.pageName.name||"default"}_view`}
  setting={theConfig}
  config={theConfig.viewConfig}
/>
}
    
