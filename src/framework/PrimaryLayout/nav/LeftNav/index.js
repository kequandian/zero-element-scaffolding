import React from 'react';
import { Layout } from 'antd';
import useSelectedKeys from '../../utils/useSelectedKeys';
import renderMenu from '../../utils/renderMenu';

import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
import './index.less';

const { Sider } = Layout;

const cMap = {
  SubMenu,
  MenuItem,
};

export default function LeftNav({ path, menuData }) {
  const selectedKeys = useSelectedKeys(path);

  return <Sider
    width={menuData ? 200 : 0}
    style={{
      background: '#fff',
      overflow: 'hidden auto',
    }}>
    <div className="LeftNav">
      {renderMenu({
        menuData,
        divider: false,
        selectedKeys,
        component: cMap,
      })
      }
    </div>
  </Sider>
}