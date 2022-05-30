import React, { useState } from 'react';
import { Input, Form, Button, message, Spin } from 'antd';
import promiseAjax from '@/utils/promiseAjax';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

//组件
import SelectFetchCompx from './formType/SelectFetch';
import RadioCompox from './formType/Radio';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

const tailLayout = {
    wrapperCol: { offset: 14, span: 10 },
};

//权限组
const permFirstOptions = {
    api: '/api/adm/perm/first',
    label: 'name',
    value: 'id'
}

//权限类
const permSecondOptions = {
    api: '/api/adm/perm/second/(fistGroupId)',
    label: 'name',
    value: 'id',
    saveField: {
        secondGroupName: 'name'
    }
}

//创建项
const typeOptions = {
    mapOpt: [
        {
            label: '单个创建',
            value: 'Single',
        },
        {
            label: '群创建',
            value: 'Multiple',
        }
    ]
}

export default function (props) {

    const { title = '', itemData = {}, cb } = props;

    const [form] = Form.useForm();

    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState(itemData);

    useDidMount(_ => {
    });

    useWillUnmount(_ => {
        setPostData({})
    });

    // function getListAction() {
    //     setLoading(true)
    //     const apiUrl = `${getEndpoint()}/api/adm/perm/allPermList`;
    //     const queryData = {}
    //     promiseAjax(apiUrl, queryData)
    //         .then(resp => {
    //             // console.log(resp , '获取权限信息')
    //             if (resp.code === 200) {
    //                 const data = resp.data;
    //                 if (data && data.length > 0) {
    //                     data.map((item, index) => {
    //                         item.key = index + 1
    //                         return item
    //                     })
    //                 }
    //             } else {
    //                 console.error('获取权限信息失败')
    //             }
    //         })
    //         .finally(_=>{
    //             setLoading(false)
    //         })
    // }

    //添加权限
    function postAction(addData) {
        setLoading(true)
        const apiUrl = `${getEndpoint()}/api/adm/perm/autoGenPerm`;
        const queryData = { ...addData }
        console.log('queryData === ', queryData)
        promiseAjax(apiUrl, queryData, { method: 'POST' })
            .then(resp => {
                // console.log(resp , '升级精灵操作')
                if (resp.code === 200) {
                    // const data = resp.data;
                    message.success('提交成功')
                    onReset()
                    setPostData({})
                    if(cb){
                        cb(true)
                    }
                    // getListAction()
                } else {
                    message.success('提交失败')
                    console.error(resp, ' 提交失败 ')
                }
            })
            .finally(_=>{
                setLoading(false)
            })
    }


    function onFinish(value) {
        const data = {
            ...value,
            ...postData
        }
        // data.identifier = postData.permission
        if (!data.secondGroupId) {
            data.secondGroupId = null
            data.secondGroupName = null
        }
        data.addSuffix = data.addSuffix || null
        data.updateSuffix = data.updateSuffix || null
        data.viewSuffix = data.viewSuffix || null
        data.delSuffix = data.delSuffix || null
        data.moduleName = data.moduleName || null
        // console.log(data, ' === 提交数据 ')
        postAction(data)
    }

    const onReset = () => {
        form.resetFields();
    };

    const onSaveData = (value) => {
        const nPostData = {
            ...postData,
            ...value
        }
        setPostData(nPostData)
    }

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

            <Form.Item name="name" label="权限名称" rules={[{ required: true }]}>
                <Input placeholder='请输入' />
            </Form.Item>

            <Form.Item name="identifier" label="识别字符" rules={[]} initialValue={postData.permission}>
                <Input disabled />
            </Form.Item>
            <Form.Item name="fistGroupId" label="权限组" rules={[{ required: true }]}>
                <SelectFetchCompx field="fistGroupId" options={permFirstOptions} saveData={onSaveData} />
            </Form.Item>

            {
                postData.fistGroupId ? (
                    <>
                        <Form.Item name="secondGroupId" label="权限类" rules={[]}>
                            <SelectFetchCompx field="secondGroupId" options={permSecondOptions} postData={postData} saveData={onSaveData} linkage={postData.fistGroupId} />
                        </Form.Item>
                        {/* <Form.Item name="secondGroupName" label="权限类名" rules={[]} initialValue={postData.secondGroupName} hidden>
                            <Input disabled />
                        </Form.Item> */}
                    </>
                ) : null
            }

            {
                !postData.secondGroupId ? (
                    <>
                        <Form.Item name="moduleName" label="模块名" rules={[{ required: true }]}>
                            <Input placeholder='请输入' />
                        </Form.Item>
                    </>
                ) : null
            }

            <Form.Item name="type" label="创建项" rules={[{ required: true }]}>
                <RadioCompox field="type" options={typeOptions} saveData={onSaveData} />
            </Form.Item>

            {
                postData.type === 'Multiple' ? (
                    <>
                        <Form.Item name="addSuffix" label="新增" rules={[]}>
                            <Input placeholder='请输入' />
                        </Form.Item>
                        <Form.Item name="updateSuffix" label="编辑" rules={[]}>
                            <Input placeholder='请输入' />
                        </Form.Item>
                        <Form.Item name="viewSuffix" label="详情" rules={[]}>
                            <Input placeholder='请输入' />
                        </Form.Item>
                        <Form.Item name="delSuffix" label="删除" rules={[]}>
                            <Input placeholder='请输入' />
                        </Form.Item>
                    </>
                ) : null
            }

            <Form.Item {...tailLayout} style={{ marginTop: '25px' }}>
                <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                    重置
                </Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                    提交
                </Button>
            </Form.Item>
        </Form>
    )

}