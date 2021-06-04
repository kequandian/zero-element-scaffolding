import React from 'react';
import { Input, Tooltip } from 'antd';

import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

/**
 * 需要填写 updateFileBind 绑定需要更新的回显的字段
 */

export default ({
    props,
    content,
    placement,
    width = "240px",
    handle,
    config = {},
    ...rest
}) => {

    const {
        onFormatValue,
        onSaveOtherValue,
        onExpect,
    } = handle;

    const { API, bindField = '' } = config;

    const tips = '按回车进行搜索';
    function handleGetInfo(e) {

        const apiUrl = `${getEndpoint()}${API}`;

        const value = e.target.value;
        const queryData = {
            value
        }

        promiseAjax(apiUrl, queryData, {})
            .then(resp => {
                if (resp && resp.code === 200) {
                    const data = resp.data;
                    onSaveOtherValue(bindField, data)
                } else {
                    console.log(`访问 ${API} API失败`)
                }
            })
    }


    return (
        <Tooltip
            trigger={['focus']}
            title={tips}
            placement="right"
            overlayClassName="numeric-input">
            <Input {...rest} {...props} style={{ width: width }} onPressEnter={handleGetInfo} />
        </Tooltip>
    )
}