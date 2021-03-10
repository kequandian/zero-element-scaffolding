
module.exports = {
    items: [
        {
            //   component: 'Form',
            config: {
                fields: [
                    { field: '_group', type: 'group-title', defaultValue: '申请审批信息' },
                    {
                        field: 'currentUserId', label: '经办人', type: 'modal-radio',
                        props: {},
                        rules: ['required'],
                        options: {
                            title: '选择经办人',
                            label: 'name',
                            editLabel: 'name',
                            value: 'id',
                            pagination: true,
                            API: '/api/adm/users',
                            fields: [
                                {
                                    label: '经办人名字',
                                    field: 'name'
                                },
                                {
                                    label: '联系电话',
                                    field: 'phone'
                                }
                            ]
                        }
                    },
                    {
                        label: '转交步骤', field: 'currentStepId', type: 'dynamic_radio',
                        options: [
                            { label: '开始', value: 'START' },
                            { label: '中间', value: 'BY_ROUNDS' },
                            { label: '结束', value: 'CLOSE' },
                        ],
                        rules: ['required']
                    },
                    // {
                    //     field: 'releaseType', label: '办理意见', type: 'modal-radio',
                    //     props: {},
                    //     rules: ['required'],
                    //     options: {
                    //         title: '选择办理意见',
                    //         label: 'name',
                    //         editLabel: 'name',
                    //         value: 'id',
                    //         pagination: true,
                    //         API: '/api/adm/users',
                    //         fields: [
                    //             {
                    //                 label: '经办人名字',
                    //                 field: 'name'
                    //             },
                    //             {
                    //                 label: '联系电话',
                    //                 field: 'phone'
                    //             }
                    //         ]
                    //     }
                    // },
                    {
                        label: '办理意见', field: 'node', type: 'text-area',
                        span: 12,
                        props: {
                            autoSize: {
                                minRows: 3,
                            }
                        }
                    },
                    {
                        label: '上传文件',
                        field: 'attachments',
                        type: 'direct-upload',
                        span: 24,
                        options: {
                            title: '点击上传',
                            API: ''
                        }
                    }
                ]
            }
        }
    ]
}