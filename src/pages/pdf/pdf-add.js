import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from "@/framework/useBreadcrumb"

import { theConfig } from './index';

export default () => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: "PDF页增加"}
    ]);
    if(theConfig){
        const pageConfig = {
            layout: theConfig.layout.form,
            title: theConfig.pageName.new,
            items: [
              {
                component: 'Form',
                config: {
                  API: {
                    createAPI: theConfig.createAPI,
                  },
                  layout: 'Grid',
                  layoutConfig: {
                    value: Array(theConfig.columns).fill(~~(24 / theConfig.columns)),
                  },
                  fields: theConfig.createFields || theConfig.formFields,
                },
              },
            ],
        }
        return <ZEle namespace={`${theConfig.pageName.name||"default"}_add`} config={pageConfig} />;        
        }else{
            return <div>无页面配置信息！</div>
          }
}
