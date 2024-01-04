import React from 'react';
import { useWillMount } from 'zero-element/lib/utils/hooks/lifeCycle';
import qs from 'qs';

export default function (props) {

  const routParams = qs.parse(location.search.replace('?', ''));

  const { name, options = {}, handle = {}, onChange } = props;
  const { queryfield='id' } = options;

  useWillMount(_ => {
    onChange(routParams[queryfield])
  });

  return <div style={{ width: 1, height: 21 }}></div>;
}