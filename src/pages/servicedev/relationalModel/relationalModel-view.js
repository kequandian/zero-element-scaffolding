import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import TableModalDetails from '@/pages/servicedev/relationalModel/config/relationalModel-view';

export default function AllianceManageAdd(props) {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '关系模型管理', path: '/nocode/relationalModel' },
    { title: '详情' },
  ]);

  return <TableModalDetails location={props.location} />;
};