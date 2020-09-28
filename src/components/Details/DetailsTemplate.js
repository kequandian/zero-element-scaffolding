import React, { Fragment } from 'react';
import Card from '@/components/Card';
import Details from '@/components/Details';
import useDetails from '@/components/Details/hooks';

import ImageCardList from '@/components/Details/components/ImageCardList';
import Statuslog from '@/components/Details/components/Statuslog';

import { Flex } from 'layout-flex';

import './index.less';

const { FlexItem } = Flex;

const componentMap = {
  plain: Details,
  cardList: ImageCardList,
  statusLog: Statuslog,
};

export default function ({ namespace, setting, config }) {
  const [data, loading] = useDetails(namespace, setting.getAPI);
  const { left = [], right = [] } = config;

  const otherProps = {
    loading,
    fieldsMap: setting.map,
    col: setting.columns,
    data,
  };

  return <Flex align="flex-start">
    <FlexItem flex={1}>
      {left.map(opt => renderCard(namespace, opt, otherProps))}
      <br /><br />
    </FlexItem>
    <FlexItem className="Details-other">
      {right.map(opt => renderCard(namespace, opt, otherProps))}
    </FlexItem>
  </Flex>
}

function renderCard(namespace, opt, props) {
  const { title, type, ...restOpt } = opt;

  const C = componentMap[type];

  if (!C) {
    return `未知的 view type: ${type}`;
  }  

  return <Fragment key={`${title}-${type}`}>
    <Card title={title}>
      <C
        {...props}
        {...restOpt}
        namespace={namespace}
      />
    </Card><br />
  </Fragment>
}