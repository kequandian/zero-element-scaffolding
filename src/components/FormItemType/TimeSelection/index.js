import React from 'react';
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle';
import global from 'zero-element/lib/config/global';
import { TimePicker } from 'antd';
import moment from 'moment';
import secoundToHms from '@/components/ValueType/SecoundToHms';
import { hmsToSecound } from '@/components/ValueType/SecoundToHms';
import _ from 'lodash';


function TimeSelection(props) {

  const { dateFormat = {} } = global;
  const { value, options = {}, onChange,
    props: propsOpt,
    formdata,
    name,
    handle,
    // ...restProps
    defaultValue,
    data = {},
    field,
    width= '350px'
  } = props;


  const { index, text, record } = data;

  const { onExpect, onSaveOtherValue, onEdit } = handle;

  let val = value || defaultValue || text ? value || defaultValue || text : '';

  // console.log('props = ', props)

  function handleChange(moments, dateString) {

    const secound = hmsToSecound(dateString);

    if (onSaveOtherValue) {
      onSaveOtherValue(name, secound)
    }
    if (onChange) {
      onChange(secound);
    }
    if (onEdit) {
      _.set(record, field, secound);
      onEdit(index, record)
    }
  }

  const dateProps = {
    // showToday: true,
    // allowClear: false,
    // ...propsOpt,
    // ...restProps,
    // format,
    style: { width },
    value: val ? moment(secoundToHms({ value: val }), 'HH:mm:ss') : '',
    onChange: handleChange
  };


  return <TimePicker showNow={false} {...dateProps} />;

}

export default TimeSelection;