import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from "@/framework/useBreadcrumb"

import { theConfig } from './index';


export default () => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: "PDF页更改"}
    ]);

    if(theConfig){
        const pageConfig = {
            layout: theConfig.layout.form,
            title: theConfig.pageName.edit,
            items: [
              {
                component: 'Form',
                config: {
                  API: {
                    getAPI: theConfig.getAPI,
                    updateAPI: theConfig.updateAPI,
                  },
                  layout: 'Grid',
                  layoutConfig: {
                    value: Array(theConfig.columns).fill(~~(24 / theConfig.columns)),
                  },
                  fields: theConfig.updateFields || theConfig.formFields,
                },
              },
            ],
        }
        return <ZEle namespace={`${theConfig.pageName.name||"default"}_edit`} config={pageConfig} />;        
        }else{
            return <div>无页面配置信息！</div>
          }
}
