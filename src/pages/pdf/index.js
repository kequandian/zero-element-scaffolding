import useBreadcrumb from '@/framework/useBreadcrumb';
import React,{useState} from 'react';
import ZEle from 'zero-element';
import config from './config/index';
let pageConfig = require("@/../public/setting.json")

export default function PdfList(){
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: "PDF列表页"}
    ]);

    console.log("config",config)
    console.log(pageConfig,"pageConfig")

    return <ZEle namespace={`${pageConfig.pageName.name||"default"}_page`} config={config} />
}
