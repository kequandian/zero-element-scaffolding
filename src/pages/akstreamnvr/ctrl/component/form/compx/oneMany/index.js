import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Popconfirm, Table, Select, DatePicker, Modal } from 'antd';
import moment from 'moment';

import './index.less'

const { MonthPicker, RangePicker } = DatePicker;

const { Option } = Select;

const defaultLabelCol = {
  xs: { span: 6, },
};

const defaultWrapperCol = {
  xs: { span: 14, },
};

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today
  return current < moment().endOf('day');
}

const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(0, 0),
  disabledMinutes: () => range(0, 0),
  disabledSeconds: () => [],
});

const weekDays = [
  { label: '星期一', value: '1'},
  { label: '星期二', value: '2'},
  { label: '星期三', value: '3'},
  { label: '星期四', value: '4'},
  { label: '星期五', value: '5'},
  { label: '星期六', value: '6'},
  { label: '星期日', value: '0'},
]

const App = (props) => {

  const { field, changeValues, width=580 } = props;

  const [ form ] = Form.useForm();
  const [ visible, setVisible ] = useState(false); 

  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(1);


  function handleSubmitForm(values) {

    if(values.weekDay){
      values.weekDayObj = weekDays.find(item => item.value === values.weekDay)
    }
    if (values.startTime) {
      values.startTime = values.startTime.format('YYYY-MM-DD HH:mm:ss');
    }
    if (values.endTime) {
      values.endTime = values.endTime.format('YYYY-MM-DD HH:mm:ss');
    }

    const newData = {
      key: count,
      weekDay: values.weekDay,
      startTime: values.startTime,
      endTime: values.endTime,
    };
    const newList = [...dataSource, newData];
    setDataSource(newList);
    setCount(count + 1);
    setVisible(false);

    //保存数据
    changeValues(newList, field);
  }

  //重置表单
  const onReset = () => {
      form.resetFields()
  }

  //确定
  const onOk = e => {
    setVisible(false)
  }

  //关闭
  const onClose = e => {
      setVisible(false)
  }

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: '星期',
      dataIndex: 'weekDay',
      width: 150,
      editable: true,
      render: (_, record) => {
        return <div>{weekDays.find(item => item.value === record.weekDay).label}</div>
      }
    },
    {
      title: '开始录制时间',
      dataIndex: 'startTime',
      width: '30%',
      editable: true,
    },
    {
      title: '结束录制时间',
      dataIndex: 'endTime',
      width: '30%',
      editable: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="是否删除该条规则?" onConfirm={() => handleDelete(record.key)}>
            <a>删除</a>
          </Popconfirm>
        ) : null,
    },
  ];

  //新增列
  const handleAdd = () => {
    setVisible(true)
  };
  
  return (
    <div style={{width: '670px'}}>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{  marginBottom: 16, }}
      >
        添加规则
      </Button>
      <Table
        // components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={defaultColumns}
        pagination={{
          hideOnSinglePage:true
        }}
      />

      <Modal
          title="创建录制计划"
          visible={visible}
          onCancel={onClose}
          maskClosable={false}
          width={width}
          destroyOnClose={true}
          footer={null}
      >
          <Form 
                labelCol={defaultLabelCol}
                wrapperCol={defaultWrapperCol} 
                form={form} 
                onFinish={handleSubmitForm} >
                
                <Form.Item label="星期" name="weekDay" rules={[{ required: true, message: '请选择星期' }]}>
                  <Select
                    // showSearch
                    style={{ width: 300 }}
                    placeholder="请选择"
                    optionFilterProp="children"
                    // onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {
                      weekDays.map((item, index) => (
                        <Option key={`wd_${index}`} value={item.value}>{item.label}</Option>
                      ))
                    }
                  </Select>
                </Form.Item>

                <div style={{ width: '100%', height: '10px'}}></div>
                <Form.Item label="开始录制时间" name="startTime" rules={[{ required: true, message: '请选择开始录制时间' }]}>
                    <DatePicker
                      style={{ width: 300 }}
                      format="YYYY-MM-DD HH:mm:ss"
                      // disabledDate={disabledDate}
                      disabledTime={disabledDateTime}
                      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    />
                </Form.Item>

                <div style={{ width: '100%', height: '10px'}}></div>
                <Form.Item label="结束录制时间" name="endTime" rules={[{ required: true, message: '请选择结束录制时间' }]}>
                    <DatePicker
                      style={{ width: 300 }}
                      format="YYYY-MM-DD HH:mm:ss"
                      // disabledDate={disabledDate}
                      disabledTime={disabledDateTime}
                      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    />
                </Form.Item>

                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: '20px' }}>
                        <Button style={{ marginRight: '15px' }} onClick={()=>onReset()} >
                            重置
                        </Button>
                        <Button type="primary" htmlType="submit" >
                            提交
                        </Button>
                    </div>
                </Form.Item>
                
                
            </Form>
      </Modal>
    </div>
  );
};
export default App;