import React from 'react';
import { Menu } from 'antd';
import useSelectedKeys from '../utils/useSelectedKeys';
import useOpenKeys from '../utils/useOpenKeys';
import renderMenu from '../utils/renderMenu';

export default function LeftNav({ path, menuData }) {
  const selectedKeys = useSelectedKeys(path);
  const [openKeys, setOpendKeys] = useOpenKeys(null);

  return <Menu
    mode="inline"
    style={{ height: '100%', borderRight: 0 }}
    selectedKeys={selectedKeys}
    openKeys={openKeys.length ? openKeys : selectedKeys}
    onOpenChange={setOpendKeys}
  >
    {renderMenu(menuData, true)}
  </Menu>
}