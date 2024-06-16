import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';

import ApplyWithdrawal from '@/pages/offline/config/ApplyWithdrawal';
export default function Apply(props){
    useBreadcrumb([
        { title: '主页', path: '/' },
        { title: '线下管理' },
        { title: '提现申请' },
      ]);
    return <ApplyWithdrawal />;
}