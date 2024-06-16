import React from 'react';

export default function Index(props) {

    const { data: { text = '', record }, options = {} } = props;
    const { path, query = { id: 'id' }, blank = false } = options;

    function convertStatus(v) {
        if(!v){
            return '自定义';
        } else if (v){
            return '标准字段'
        } else {
            return '子模型';
        }
    }
    
    return (
        <div>{convertStatus(text)}</div>
    )

}