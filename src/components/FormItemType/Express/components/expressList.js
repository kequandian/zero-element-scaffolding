import React from 'react'
import { Table,Spin } from 'antd'
export default function ExpressList(props){
    const {
        data,
        loading
    }=props

    const columns = [
        {title:"物流情况",dataIndex:"context"},
        {title:"时间",dataIndex:"time"}
    ]

    return <Spin spinning={loading}>
        <Table dataSource={data} columns={columns}>
        </Table>
    </Spin>
}