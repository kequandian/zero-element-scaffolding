import React from 'react';

export default (props) => {
  const {
    name,
    props: propsOtp,
    defaultValue,
    value,
    ...rest
  } = props;

  return <div
    style={{
      fontSize: 18,
      color: '#2a5e90',
      display: 'flex',
      alignItems: 'center',
      marginTop: 20
    }}
    {...rest}
  >
    <div
      style={{
        width: 4,
        height: 20,
        backgroundColor: '#2a5e90',
        marginRight: 6,
      }}
    ></div>
    <div>
      {value || defaultValue}
    </div>
  </div>;
}