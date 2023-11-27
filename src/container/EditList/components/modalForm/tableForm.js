import React, { useContext, useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { Button, Form, Input, Select, Popconfirm, Table, Switch } from 'antd';
import qs from 'qs';
import './tableForm.less'

const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const form = useContext(EditableContext);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};

// Index
export default (props) => {

    const { formData, fields, options={}, onChange, field, cb } = props;

    const { 
        API, 
        dataField = 'records',
        label: optLabel = 'label',
        value: optValue = 'value',
        // query,
    } = options;

    const [ currentPage, setCurrentPage]  = useState(1)
    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(0);
    
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    
    const defaultColumns = [
        {
            title: '标题',
            dataIndex: 'label',
            rules: [{ required: true, message: 'Please input your username!' }],
            render: (_, record) => {
                return (
                    <Input 
                        defaultValue={record.label} 
                        onChange={(e) => _handleSave(record.key, e.target.value, 'label')} 
                    />
                )
            }
        },
        {
            title: '字段',
            dataIndex: 'field',
            render: (_, record) => {
                return (
                    <Select
                        style={{ width: 120 }}
                        onChange={(e) => _handleSave(record.key, e, 'field')}
                        defaultValue={record.field}
                        options={fields}
                    />
                )
            }
        },
        {
            title: '是否必填',
            dataIndex: 'rules',
            width: 90,
            render: (_, record) => {
                return (
                    <Switch 
                        checked={record.rules} 
                        onChange={(e) => _handleSave(record.key, e, 'rules') } 
                    />
                )
            }
        },
        {
            title: '操作',
            dataIndex: 'operation',
            width: 70,
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <a onClick={() => handleDelete(record.key)}>删除</a>
                ) : null,
        },
    ];

    const handleAdd = () => {
        const newData = {
            key: count,
            label: '',
            field: '',
            rules: false,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const _handleSave = (key, value, field) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        const item = newData[index];
        item[field] = value;
        newData.splice(index, 1, {
            ...item,
        });
        setDataSource(newData);
        cb(newData)
    };

    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
            shouldCellUpdate
        };
    });

    const shouldCellUpdate = (record, rowData) => {
        console.log('record = ', record)
        console.log('rowData = ', rowData)
    }

    const onShowSizeChange = (current, pageSize) => {
        // console.log(current, pageSize);
        setCurrentPage(current)
      };
    return (
        <div>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 8,
                }}
            >
                添加
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
                pagination={
                    {
                        total: dataSource.length,
                        current: currentPage,
                        pageSize: 5,
                        onChange:onShowSizeChange
                    }
                }
                style={{
                    marginBottom: 10,
                }}
            />
        </div>
    );
};