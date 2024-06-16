import React from 'react';
import ZEle from 'zero-element';
import config from './config/tableField-edit';
import useBreadcrumb from "@/framework/useBreadcrumb"

export default () => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项',path:'/designpage/config'},
        { title: "报表管理",path:'/tables'},
        { title: "报表编辑"}
    ]);

    return <ZEle namespace="tableField_edit" config={config} />;
}