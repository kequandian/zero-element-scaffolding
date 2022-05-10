import React from 'react';
import ZEle from 'zero-element';
import config from './config/navCategory-edit';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function WorkFlowListApply() {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: 'NavUI', path: '/navUI' },
        { title: 'Nav分类', path: '/navUI/navCategory' },
        { title: '编辑' },
    ]);
    useWillUnmount(switchEndpoint)

    return <ZEle namespace="navCategory_edit" config={config} />
};