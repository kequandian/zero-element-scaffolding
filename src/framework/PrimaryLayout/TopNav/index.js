import React from 'react';
import { Menu } from 'antd';
import useSelectedKeys from '../utils/useSelectedKeys';
import renderMenu from '../utils/renderMenu';

import styles from '../index.less';

export default function TopNav({ path, menuData }) {
  const selectedKeys = useSelectedKeys(path);

  return <Menu
    className={styles.menu}
    theme="dark"
    mode="horizontal"
    style={{ lineHeight: '64px' }}
    selectedKeys={selectedKeys}
  >
    {renderMenu(menuData)}
  </Menu>
}