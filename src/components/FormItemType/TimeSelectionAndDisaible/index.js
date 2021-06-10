import React, { useState, useEffect } from 'react';
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle';
import global from 'zero-element/lib/config/global';
import { TimePicker } from 'antd';
import moment from 'moment';
import secoundToHms from '@/components/ValueType/SecoundToHms';
import { hmsToSecound } from '@/components/ValueType/SecoundToHms';
import _ from 'lodash';


function TimeSelectionAndDisaible(props) {

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
    width = '350px'
  } = props;


  const { index, text, record } = data;

  const { onExpect, onSaveOtherValue, onEdit } = handle;

  const [val, seVal] = useState()
  let v = value || defaultValue || text ? value || defaultValue || text : '';
  useEffect(() => {
    seVal(secoundToHms({ value: v }));
  }, [v]);

  function handleChange(moments, timeString) {

    const secound = hmsToSecound(timeString);

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

  //限制小时显示
  function disabledHours() {
    let hours = [];
    let time = val;
    let timeArr = time.split(":");
    for (var i = parseInt(timeArr[0])+1; i <= 23; i++) {
      hours.push(i)
    }
    return hours;
  };
  //限制分钟
  function disabledMinutes(selectedHour) {
    let timeArr = val.split(":");
    let minutes = [];
    // if (selectedHour == parseInt(timeArr[0])) {
    for (let i = parseInt(timeArr[1]) + 1; i <= 59; i++) {
      minutes.push(i);
    }
    // }

    return minutes;
  };
  //限制秒
  function disabledSeconds(selectedHour, selectedMinute) {
    let timeArr = val.split(':');
    let second = [];
    // if (selectedHour == parseInt(timeArr[0]) && selectedMinute == parseInt(timeArr[1])) {
    for (var i = parseInt(timeArr[2]) + 1; i <= 59; i++) {
      second.push(i)
    }
    // }
    return second;
  };

  const dateProps = {
    // showToday: true,
    // allowClear: false,
    // ...propsOpt,
    // ...restProps,
    // format,
    style: { width },
    value: val ? moment(val, 'HH:mm:ss') : '',
    onChange: handleChange
  };


  return <TimePicker
    disabledHours={disabledHours}
    disabledMinutes={disabledMinutes}
    disabledSeconds={disabledSeconds}
    hideDisabledOptions={true}
    showNow={false} {...dateProps}

  />;

}

export default TimeSelectionAndDisaible;