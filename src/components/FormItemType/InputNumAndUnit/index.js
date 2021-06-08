import React from 'react';
import global from 'zero-element/lib/config/global';
import { InputNumber } from 'antd';
import _ from 'lodash';


function InputNumAndUnit(props) {

  const { dateFormat = {} } = global;
  const { value, options = {}, onChange,
    props: propsOpt,
    formdata,
    name,
    handle,
    // ...restProps
    defaultValue,
    data = {},
    field
  } = props;


  const { index, text, record } = data;

  const { onExpect, onSaveOtherValue, onEdit } = handle;

  let val = value || defaultValue || text ? value || defaultValue || text : '';

  // console.log('props = ', props)

  function handleChange(value) {

    if (onSaveOtherValue) {
      onSaveOtherValue(name, value)
    }
    if (onChange) {
      onChange(value);
    }
    if (onEdit) {
      _.set(record, field, value);
      onEdit(index, record)
    }
  }

const dateProps = {
  value: val,
  max: 360,
  onChange: handleChange
};


return <InputNumber {...dateProps}
  formatter={value => `${value}${propsOpt.unit}`}
  parser={value => value.replace(`${propsOpt.unit}`, '')}
/>;

}

export default InputNumAndUnit;