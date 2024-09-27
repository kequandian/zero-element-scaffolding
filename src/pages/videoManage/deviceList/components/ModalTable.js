import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Table, Button, message } from 'antd';
import _ from 'lodash';
import { query, post } from 'zero-element/lib/utils/request';

const ModalTable = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => {
    return {}
  });

  const [list, setList] = useState();
  const [selectedRow, setSelectedRow] = useState([]);
  const [searchData, setSearchData] = useState({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })
  
  useEffect(() => {
    fetchList();
  }, [searchData.pageNum, searchData.pageSize]);

  const columns = [
    { 
      title: '用户名',
      dataIndex: 'userName'
    },
    { 
      title: '邮箱',
      dataIndex: 'email'
    }
  ]

  async function fetchList () {
    const res = await query(`/api/newconf/devices/${_.get(props, 'record.id')}/default/participants?pageNum=${searchData.pageNum}&pageSize=${searchData.pageSize}`)
    // const res = await query(`/api/adm/newconf/devices?pageNum=${searchData.pageNum}&pageSize=${searchData.pageSize}`)
    console.log('res==', res)
    if (_.get(res, 'data.code') === 200) {
      setList(_.get(res, 'data.data.records') || []);
      setSearchData((prev) => {
        return {
          ...prev,
          total: Number(_.get(res, 'data.data.total') || 0),
          pageNum: Number(_.get(res, 'data.data.current') || 1),
        }
      })
    }
  }

  function handleBack () {
    if (_.get(props, 'onBack') && _.isFunction(props.onBack)) {
      props.onBack();
    }
  }

  async function handleOk () {
    if (_.size(selectedRow) === 0) {
      message.error('请选择参会人');
      return;
    }
    const res = await post('/api/adm/newconf/devices/{sn}/default/participants', {
      participantIds: _.cloneDeep(selectedRow).map(x => x.id)
    });
    if (_.get(res, 'code') !== 200) {
      message.error(_.get(res, 'msg') || '操作失败');
      return;
    }
    if (_.get(props, 'onBack') && _.isFunction(props.onBack)) {
      props.onBack();
    }
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Table
        rowKey='id'
        size='middle'
        columns={columns}
        dataSource={list}
        rowSelection={{
          onChange: (keys, rows) => {
            setSelectedRow(rows);
          }
        }}
        position={{
          current: searchData.pageNum,
          pageSize: searchData.pageSize,
          total: searchData.total
        }}
      />
      <div style={{ textAlign: 'right', marginTop: 20 }}>
        <Button onClick={handleBack}>返回</Button>
        <Button type='primary' style={{ marginLeft: 15 }} onClick={handleOk}>确定</Button>
      </div>
    </div>
  )
})

export default ModalTable;