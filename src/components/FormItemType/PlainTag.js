import React, { useEffect } from 'react';
import { Row, Col, Tag } from 'antd';
import { formatAPI } from 'zero-element/lib/utils/format';

export default (props) => {
  const {
    name,
    namespace,
    props: propsOtp,
    defaultValue,
    value = defaultValue,
    options,
    formdata,
    onChange,
    ...rest
  } = props;
  const {
    placeholder = '-',
    autoSave = false,
    format, map,
    symbol = '/', joinField,
  } = options;

  let v = value;
  const rst = [];
  if (format) {

    if (Array.isArray(format)) {
      format.forEach(f => {
        // rst.push(formatAPI(f.field, { namespace, placeholder, data: formdata }))
        let value = formatAPI(f.field, { namespace, placeholder, data: formdata });
        rst.push({ value: value, label: f.text, color: f.color })
      })

      return (
        rst.map((item, index) => {
          return <Tag color={item.color} style={{marginRight: '25px'}}>
            <div style={{width: '150px', padding: '15px 0', display:'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div style={{fontSize: '24px'}}>{item.value}</div>
              <div style={{fontSize: '14px', marginTop: '10px'}}>{item.label}</div>
            </div>
          </Tag>

        })
      )
    } else {
      rst.push(formatAPI(format, { namespace, placeholder, data: formdata }));
      v = rst.join('\n');
    }

  }

  if (map) {
    v = map[v] || v;
  }

  if (Array.isArray(v)) {
    if (joinField) {
      v = v.map(i => i[joinField]).join(symbol);
    } else {
      v = v.join(symbol);
    }
  }

  useEffect(_ => {
    if (autoSave && v !== value) {
      onChange(v);
    }
  }, [autoSave, value]);

  let echoText = v;
  if (!v && v !== 0) {
    echoText = placeholder;
  }

  return <div {...rest}{...propsOtp}>{String(echoText)}</div>;
}