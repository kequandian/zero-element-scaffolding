import React from 'react';
import { Tag, Icon } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';

import styles from './index.less';

export default function TagAdd({ onAdd }) {
  return <Tag className={styles.tag} onClick={onAdd}>
    {/* <Icon
      style={{
        color: '#108ee9',
      }}
      type="plus"
    /> */}
    <PlusOutlined style={{fontSize:'12px'}} />
  </Tag>;
}