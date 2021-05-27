import React from 'react';
import ZEle from 'zero-element';
import config from './config/tableField-add';

import useBreadcrumb from "@/framework/useBreadcrumb"


export default () => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项',path:'/designpage/config'},
        { title: "新增统计报表"}
    ]);
    return <ZEle namespace="tableField_add" config={config} />
}
