import React, { useState } from 'react';
import { Tabs } from 'antd';
import Content from '@/layouts/Content';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';

const { TabPane } = Tabs;

export default function Term() {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城配置' },
    { title: '规则配置' },
  ]);
  const [type, setType] = useState('MEMBER_RULE');

  function handleChangeTabPane(key) {
    setType(key);
  }

  const config = {
    layout: 'Empty',
    title: '',
    items: [
      {
        layout: 'Empty',
        component: 'Form',
        config: {
          goBack: false,
          API: {
            getAPI: `/api/cms/term/config?type=${type}`,
            updateAPI: '/api/cms/term/config/{id}',
          },
          fields: [
            { field: 'content', label: '', type: 'rich-text',span:24 },
          ]
        }
      }
    ]
  };

  return <Content>
    <Tabs
      destroyInactiveTabPane
      defaultActiveKey={type}
      onChange={handleChangeTabPane}
    >
      <TabPane tab="会员规则" key="MEMBER_RULE">
        <ZEle namespace='term_member' config={config} />
      </TabPane>
      <TabPane tab="积分规则" key="INTEGRAL_RULE">
        <ZEle namespace='term_integral' config={config} />
      </TabPane>
      <TabPane tab="品牌故事" key="BRAND_STORY">
        <ZEle namespace='term_story' config={config} />
      </TabPane>
      <TabPane tab="隐私策略" key="PRIVACY_POLICY">
        <ZEle namespace='term_policy' config={config} />
      </TabPane>
    </Tabs>
  </Content>
}