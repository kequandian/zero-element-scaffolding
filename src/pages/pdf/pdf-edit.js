import React from 'react';
import ZEle from 'zero-element';
import config from './config/pdf-editconfig';
import useBreadcrumb from "@/framework/useBreadcrumb"

let pageConfig = require("@/../public/setting.json")

export default () => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: "PDF页更改"}
    ]);
    return <ZEle namespace={`${pageConfig.pageName.name||"default"}_edit`} config={config} />
}
