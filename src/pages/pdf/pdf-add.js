import React from 'react';
import ZEle from 'zero-element';
import config from './config/pdf-addconfig';
import useBreadcrumb from "@/framework/useBreadcrumb"

let pageConfig = require("@/../public/setting.json")

export default () => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: "PDF页增加"}
    ]);
    return <ZEle namespace={`${pageConfig.pageName.name||"default"}_add`} config={config} />
}
