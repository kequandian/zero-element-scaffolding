import React from 'react';
import { Table } from 'antd';
import { Render } from 'zero-element/lib/config/layout';
import useListHandle from 'zero-element-antd/lib/container/List/utils/useListHandle';

export default function BaseTable(props) {
  const { namespace, config, extraData, extraEl } = props;
  const {
    layout = 'Empty', layoutConfig = {},
    props: propsCfg = {},
  } = config;

  const [
    tableProps, tableData, handle, actionsItems,
    {
      operationData,
      renderBatchOperation,
    }
  ] = useListHandle({
    namespace,
    extraData,
    config,
    props,
  });

  console.log('props = ', props)
  console.log('tableProps = ', tableProps)
  console.log('tableData = ', tableData)
  console.log('actionsItems = ', actionsItems)

  return <Render n={layout} {...layoutConfig}
    handle={handle}
    namespace={namespace}
  >
    <div>123456</div>
  </Render>
}