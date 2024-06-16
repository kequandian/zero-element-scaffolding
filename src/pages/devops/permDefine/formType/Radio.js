import React, { useState } from 'react';
import { Radio } from 'antd';

const radioOpt = [
    {
      label: '单项',
      value: 'SINGLE',
    },
    {
      label: '多项',
      value: 'MULTIPLE',
    }
  ];

export default function (props) {

    const { field, defaultValue, options, onChange, saveData, postData } = props;

    const { mapOpt = radioOpt } = options

    const handleChange = (e) => {
        // console.log(`selected ${e.target.value}`);
        if (onChange) {
            //TODO
            onChange({
                target: {
                    value:e.target.value
                  }
            })
        }

        if(saveData){
            const nData = {}
            nData[field] = e.target.value
            saveData(nData)
        }
    };

    return (
        <Radio.Group options={mapOpt} onChange={handleChange} optionType="button" />
    )

}