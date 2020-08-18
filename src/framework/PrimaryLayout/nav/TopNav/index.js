import React from 'react';
import { Menu } from 'antd';
import useSelectedKeys from '../../utils/useSelectedKeys';
import renderMenu from '../../utils/renderMenu';

const cMap = {
  SubMenu: Menu.SubMenu,
  MenuItem: Menu.Item,
};

export default function TopNav({ navType, path, menuData, onClick }) {
  const selectedKeys = useSelectedKeys(path);

  return <Menu
    className="menu"
    theme="dark"
    mode="horizontal"
    style={{ lineHeight: '64px' }}
    selectedKeys={selectedKeys}
  >
    {renderMenu({
      menuData, navType, onClick,
      selectedKeys,
      component: cMap,
    })}
  </Menu>
}