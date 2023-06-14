import React, { useState, useRef } from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import promiseAjax from '@/utils/promiseAjax';
import { Spin, Table, Button, message } from 'antd';

import FromModal from '../ctrl/component/modal';
import formConfig from './config/recordplanConfig';

import './index.less';

export default function Index () {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: 'AKStreamNVR', path: '/akstreamnvr' },
        { title: '录像计划' },
    ]);

    const createCnuterRef = useRef(); //创建
    const apiAKStream = `${location.protocol}//${window._env_.AKSTREAM_WEB_API}`;
    const secret = `${window._env_.ZlMediaKit_Secret}`;
    const AccessKey = `${window._env_.AKStream_AccessKey}`;//AKStream秘钥
    const [ data, setData] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ dataTotal, setDataTotal ] = useState(0);
    const [ pageSize, setPageSize ] = useState(10);
    const [ loading, setLoading] = useState(false);

    useDidMount(_=>{
        loadChanelsData()
    })

    //获取列表
    const loadChanelsData = (params={}) => {

        setLoading(true)
        const apiPath = '/RecordPlan/GetRecordPlanList'
        const query = {
            secret:secret, 
        }
        if(params.name){
            query.name = params.name
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {
            if(res.code === 200 && res.data.length > 0){
                setData(res.data)
                setPage(res.data.length)
                setDataTotal(res.data.length)
                setPageSize(res.data.length)
            }else{
                setData([])
                setPage(0)
                setDataTotal(1)
                setPageSize(1)
            }
        })
        .finally(_=>{
            setLoading(false)
        })
    }

    //提交创建数据
    const handleCreateSubmit = (data) => {

        delete data.key

        const apiPath = '/RecordPlan/CreateRecordPlan';
        const query = {
            ...data
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'POST', AccessKey: `${AccessKey}` })
        .then(res => {
            if (res.code === 200) {
                message.info("创建成功!");
                createCnuterRef.current.onClose();
                loadChanelsData();
            } else {
                message.error(res.Message);
            }
        })
        .finally(_=>{
        })
    }

    //删除
    const deleteRecordPlan = (record) => {
        console.log('删除 = ', record)

        const apiPath = '/RecordPlan/DeleteRecordPlanByName';
        const query = {
            name: record.name
        }
        promiseAjax(apiAKStream+apiPath, query, { method: 'GET', AccessKey: `${AccessKey}` })
        .then(res => {
            if (res.code === 200) {
                message.info('删除『' + record.name + '』成功!');
                loadChanelsData();
            } else {
                message.error(res.Message);
            }
        })
        .finally(_=>{
        })
    }

    //
    const onRequest = (data, mode) => {
        console.log(mode)
        if(mode === 'create'){
            handleCreateSubmit(data)
        }
    }

    //弹出创建窗口
    const createPlanModal = () => {
        createCnuterRef.current.onShow()
    }

    return (
        <Spin spinning={loading}>

            <div style={{width: '100%', display: "flex", padding: "10px", backgroundColor: 'white' }}>
                <Button type="primary" onClick={() => createPlanModal()}>
                    创建录制计划
                </Button>
            </div>

            <Table className={"device-table"}
                       columns={[
                           {
                               title: '录制计划名称',
                               dataIndex: 'name',
                               key: 'name',
                           },
    					   {
    					       title: '录制计划描述',
    					       dataIndex: 'describe',
    					       key: 'describe',
    					   },
						   {
						       title: '天数限制',
						       dataIndex: 'limitDays',
						       key: 'limitDays',
						   },
						   {
						       title: '空间大小限制(GB)',
						       dataIndex: 'limitSpace',
						       key: 'limitSpace',
							   render: (text, record) => (
							       text / 1024 / 1024 / 1024
							   ),
						   },
						   {
						       title: '超出后停止计划',
						       dataIndex: 'overStepPlan',
						       key: 'overStepPlan',
						       width: 160,
							   render: (text, record) => (
							       text == 0 ? '停止录制'  : '删除文件'
							   ),
						   },
                           {
                               title: '操作',
                               key: 'action',
                               width: 200,
                               render: (text, record) => (
								   <div>
										{/*<span>*/}
										{/*{<a href="javascript:;" onClick={()=>this.editRecordPlan(record)}>编辑</a>}*/}
										{/*</span>*/}
										{/*&nbsp;&nbsp;&nbsp;*/}
										<span>
										{<a href="#" onClick={()=>deleteRecordPlan(record)}>删除</a>}
										</span>
								   </div>
                                   
                               ),
                           },
                       ]}
                       dataSource={data}
                       pagination={{
                           onChange: page => {
                               loadChanelsData({
                                   page: page,
                               })
                           },
                           current: page,
                           showQuickJumper: true,
                           total: dataTotal,
                           pageSize: pageSize,
                       }}
                />

                <FromModal width={720} ref={createCnuterRef} mode="create" formConfig={formConfig} onRequest={onRequest}/>
        </Spin>
    )


}