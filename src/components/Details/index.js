import React from 'react';
import { Flex } from 'layout-flex';
import { Spin, Divider, Col } from 'antd';
import styles from './index.less';

const { FlexItem } = Flex;

export default function Details(props) {
  const { loading = false, col = 2, fields = [], data = {} } = props;

  return <Spin spinning={loading}>
    <Flex className={styles.container}>
      {fields.map((option, i) => {

        const {
          title, divider,
          empty,
          label, field, map, value, append = []
        } = option;

        if (title) {
          return <h3 className={styles.title} key={i}>
            {title}
          </h3>
        }
        if (divider) {
          return <Divider key={i}>{divider.label || ''}</Divider>
        }

        return <FlexItem
          key={i}
          flex={`0 0 ${100 / col}%`}
          className={styles.valueContainer}
        >
          {empty ? null : (
            <div>
              <Col sm={6} className={styles.label}>
                {label}:
            </Col>
              <Col sm={18} className={styles.value}>
                {readValue(data, field, value, map) || '-'}
                {readAppendValue(data, append)}
              </Col>
            </div>
          )}
        </FlexItem>
      })}
    </Flex>
  </Spin>
}

function readValue(data, field, defaultValue, map) {

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  const value = data[field];

  if (value !== undefined) {
    if (map) {
      return map[value];
    }
    return value;
  }
  return undefined;
}

function readAppendValue(data, append) {
  return append.map(opt => {
    return <div style={{ color: '#666' }}>
      {data[opt.field]}
    </div>
  });
}