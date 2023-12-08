import React from 'react';
import ZEle from 'zero-element';
import config from './config/fieldModal-edit';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function WorkFlowListApply() {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '字段模型管理', path: '/fieldManage' },
        { title: '编辑' },
    ]);
    useWillUnmount(switchEndpoint)

    return <ZEle namespace="fieldManage_edit" config={config} />
};