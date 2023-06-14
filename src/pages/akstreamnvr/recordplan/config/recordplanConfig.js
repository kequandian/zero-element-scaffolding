module.exports = [
    {
        label: '录制计划名称',
        type: 'input',
        field: 'name',
        tips: '请输入名称',
        placeholder: '请输入',
    },
    {
        label: '录制计划描述',
        type: 'input',
        field: 'describe',
        tips: '请输入描述',
        placeholder: '请输入',
    },
    {
        label: '天数限制',
        type: 'input',
        field: 'limitDays',
        tips: '请输入天数',
        placeholder: '请输入',
    },
    {
        label: '空间大小',
        type: 'input',
        field: 'limitSpace',
        extra: '空间大小限制(GB)',
        placeholder: '请输入',
    },
    {
        label: '超出后停止计划',
        type: 'radio',
        field: 'overStepPlan',
        tips: '请选择网络类型',
        extra: '超出天数限制后执行动作',
        props:{
            options: [
                { label: '删除文件', value: 'DeleteFile' },
                { label: '停止录制', value: 'StopDvr' }
            ]
        }
    },
    {
        label: '是否启用',
        type: 'switch',
        field: 'enabled'
    },
    {
        label: '',
        type: 'oneMany',
        field: 'timeRangeList'
    },
]