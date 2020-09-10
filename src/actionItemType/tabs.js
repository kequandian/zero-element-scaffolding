import React from 'react';
import { Tabs } from 'antd';
import { history, withRouter } from 'umi';
import { Flex } from 'layout-flex';

const { TabPane } = Tabs;
const { FlexItem } = Flex;

function ActionOnTabs(props) {
  const { options = {}, handle = {} } = props;
  const { all, field, tags = [] } = options;
  const { onGetList } = handle;

  function handleClick(key) {

    if (typeof onGetList === 'function') {
      onGetList({
        queryData: {
          [field]: key,
        }
      });
    }
  }

  return <FlexItem flex={1}>
    <Tabs defaultActiveKey={all ? 'all' : tags[0] && tags[0].value} onChange={handleClick}>
      {all ? <TabPane tab="全部（1234）" key="all" /> : null}
      {tags.map(tag => <TabPane key={tag.value} tab={`${tag.label}（123）`} />)}
    </Tabs>
  </FlexItem>
}

export default withRouter(ActionOnTabs);