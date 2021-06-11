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
    field,
    bindfield,
  } = props;


  const { index, text, record } = data;

  const { onExpect, onSaveOtherValue, onEdit } = handle;

  const { min = '', max = '', placeholder = '', style= '' } = propsOpt;

  let val = value || defaultValue || text ? value || defaultValue || text : '';

  // console.log('val = ', val)

  function handleChange(value) {
    if (onSaveOtherValue) {
      onSaveOtherValue(name, value);
      if (bindfield) {
        onSaveOtherValue(bindfield, value);
      }
    }
    if (onChange) {
      onChange(value);
    }
    if (onEdit) {
      _.set(record, field, value);
      _.set(record, bindfield, value);
      onEdit(index, record)
    }
  }

  const dateProps = {
    placeholder: placeholder,
    style: style,
    value: val,
    min: min,
    max: max,
    onChange: handleChange
  };


  return <InputNumber {...dateProps}
    formatter={value => value > 0 && propsOpt.unit ? `${value}${propsOpt.unit}` : value}
    parser={value => propsOpt.unit ? value.replace(`${propsOpt.unit}`, '') : value}
  />;

}

export default InputNumAndUnit;