import React, { useContext, useEffect, useRef, useState } from 'react';
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
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
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
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
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
export default function Index(props) {

    const { formData, fields, options={}, onChange, field, cb } = props;

    const { 
        API, 
        dataField = 'records',
        label: optLabel = 'label',
        value: optValue = 'value',
        // query,
    } = options;
    const { id } = qs.parse(location.search.replace('?', ''));

    const [ currentPage, setCurrentPage]  = useState(1)
    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(_=>{

    },[])
console.log('dataSource == ', dataSource)
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const defaultColumns = [
        {
            title: '标题',
            dataIndex: 'label',
            render: (_, record) => {
                console.log('Input = ', record)
                return <Input defaultValue={record.label}  />
            }
        },
        {
            title: '字段',
            dataIndex: 'field',
            render: (_, record) => {
                console.log('Select = ', record)
                return (
                    <Select
                        style={{ width: 120 }}
                        onChange={handleChange}
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
                console.log('Switch = ', record)
                return <Switch checked={record.rules && record.rules.length > 0 ? true : false} />
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

    //选择字段
    const handleChange = (value) => {
        console.log(value);
    }

    const handleAdd = () => {
        const newData = {
            key: count,
            label: '',
            field: '',
            rules: false,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
        console.log('count = ', count)
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
                新增
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