import React from 'react';
import ZEle from 'zero-element';
import config from './config/tableModal-edit';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function WorkFlowListApply() {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '表模型管理', path: '/tableModal' },
        { title: '编辑' },
    ]);
    useWillUnmount(switchEndpoint)

    return <ZEle namespace="tableModal_edit" config={config} />
};