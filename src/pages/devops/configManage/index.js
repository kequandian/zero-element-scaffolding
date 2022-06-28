import React, { useState } from 'react';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import useBreadcrumb from '@/framework/useBreadcrumb';
// import ConfigItems from '@/pages/devops/configItems';
// import ConfigGroups from '@/pages/devops/configGroups';
import ZEle from 'zero-element';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';
import itemsConfig from '@/pages/devops/configItems/config';
import groupsConfig from '@/pages/devops/configGroups/config';


const { TabPane } = Tabs;

export default function () {

  useBreadcrumb([
    { title: '首页', path: '' },
    { title: '运维管理', path: '/mallManage' },
    { title: '配置管理' },
  ]);

  const [cKey, setCKey] = useState('configItems');

  useDidMount(_ => {
    const currentKey = localStorage.getItem("cConfigKey"); 
    console.log('currentKey == ', currentKey)
    if(currentKey){
      setCKey(currentKey);
    }
  });

  useWillUnmount(_ => {
  });

  //permpage, permgroups
  function handleChangeTabPane(key) {
    localStorage.setItem("cConfigKey", key); 
    setCKey(key);
  }

  console.log('cKey == ', cKey)

  return (
    <Content>
      <Tabs
        destroyInactiveTabPane
        onChange={handleChangeTabPane}
        activeKey={cKey}
      >
        <TabPane tab="配置项" key="configItems">
          {/* <ConfigItems /> */}
          <ZEle namespace="configItems" config={itemsConfig} />
        </TabPane>
        <TabPane tab="配置分组" key="configgroups">
          {/* <ConfigGroups /> */}
          <ZEle namespace="configItems" config={groupsConfig} />
        </TabPane>
      </Tabs>
    </Content>
  )
}