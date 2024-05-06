import React, { useState } from 'react';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import useBreadcrumb from '@/framework/useBreadcrumb';
// import ConfigItems from '@/pages/devops/configItems';
// import ConfigGroups from '@/pages/devops/configGroups';
import ZEle from 'zero-element';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';

import RelationalModel from '../relationalModel';
import StandardFields from '../standardFields';
import TableModal from '../tableModal';


const { TabPane } = Tabs;

export default function () {

  useBreadcrumb([
    { title: '首页', path: '' },
    { title: '模型管理', path: '' },
  ]);

  const [cKey, setCKey] = useState('');

  useDidMount(_ => {
    const currentKey = localStorage.getItem("modalManageTabKey"); 
    if(currentKey){
      setCKey(currentKey);
    }else{
      setCKey('tableModal');
    }
  });

  useWillUnmount(_ => {
  });

  //permpage, permgroups
  function handleChangeTabPane(key) {
    localStorage.setItem("modalManageTabKey", key); 
    setCKey(key);
  }


  return (
    <Content>
      <Tabs
        destroyInactiveTabPane
        onChange={handleChangeTabPane}
        activeKey={cKey}
      >
        
        <TabPane tab="表模型管理" key="tableModal">
          <TableModal />
        </TabPane>
        <TabPane tab="标准字段管理" key="standardFields">
          <StandardFields />
        </TabPane>
        <TabPane tab="关系模型管理" key="relationalModel">
          <RelationalModel />
        </TabPane>
      </Tabs>
    </Content>
  )
}