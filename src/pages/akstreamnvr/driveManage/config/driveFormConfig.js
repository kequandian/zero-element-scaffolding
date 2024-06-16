module.exports = [
    {
        label: '流媒体服务器',
        type: 'selectFetch',
        field: 'mediaServerId',
        tips: '请选择ID',
        extra: '流媒体服务器的ID',
        placeholder: '请选择',
        props:{
            api: '/MediaServer/GetMediaServerList',
            label: 'mediaServerId',
            value: 'mediaServerId'
        }
    },
    {
        label: 'App',
        type: 'input',
        field: 'app',
        tips: '请输入应用标识APP',
        extra: '应用标识APP',
        placeholder: 'rtp',
    },
    {
        label: 'vhost',
        type: 'input',
        field: 'vhost',
        tips: '请输入vhost',
        extra: '虚拟主机vhost',
        placeholder: '_defaultVhost_',
    },
    {
        label: '设备名称',
        type: 'input',
        field: 'channelName',
        tips: '请输入设备名称',
        placeholder: '请输入',
    },
    {
        label: 'Device ID',
        type: 'input',
        field: 'deviceId',
        placeholder: '请输入',
    },
    {
        label: 'Channel ID',
        type: 'input',
        field: 'channelId',
        placeholder: '请输入',
    },
    {
        label: 'ipV4',
        type: 'input',
        field: 'ipV4Address',
        tips: '请输入ipV4',
        placeholder: '请输入',
    },
    {
        label: '录制计划模板名称',
        type: 'selectFetch',
        field: 'recordPlanName',
        placeholder: '请选择',
        props:{
            api: '/RecordPlan/GetRecordPlanList',
            label: 'name',
            value: 'name'
        }
    },
    {
        label: '录制时长（秒）',
        type: 'input',
        field: 'recordSecs',
        placeholder: '请输入',
    },
    {
        label: '网络类型',
        type: 'radio',
        field: 'deviceNetworkType',
        tips: '请选择网络类型',
        extra: '固定网络、移动网络',
        props:{
            options: [
                { label: 'Fixed', value: 'Fixed' },
                { label: 'Mobile', value: 'Mobile' }
            ]
        }
    },
    {
        label: '设备类型',
        type: 'radio',
        field: 'videoDeviceType',
        tips: '请选择设备类型',
        props:{
            options: [
                { label: 'NVR', value: 'NVR' },
                { label: 'DVR', value: 'DVR' },
                { label: 'IPC', value: 'IPC' },
                { label: 'UNKNOW', value: 'UNKNOW' }
            ]
        }
    },
    {
        label: '设备流类型',
        type: 'radio',
        field: 'deviceStreamType',
        tips: '请选择设备流类型',
        props:{
            options: [
                { label: 'GB28181', value: 'GB28181' },
                { label: 'Rtsp', value: 'Rtsp' },
                { label: 'Http', value: 'Http' },
                { label: 'Rtmp', value: 'Rtmp' }
            ]
        }
    },
    {
        label: '拉流方式',
        type: 'radio',
        field: 'methodByGetStream',
        tips: '请选拉流方式',
        props:{
            options: [
                { label: 'None', value: 'None' },
                { label: 'SelfMethod', value: 'SelfMethod' },
                { label: 'UseFFmpeg', value: 'UseFFmpeg' }
            ]
        }
    },
    {
        label: 'Rtsp视频地址',
        type: 'input',
        field: 'videoSrcUrl',
        placeholder: '请输入',
        extra: '仅在拉流方式是SelfMethod或UseFFmpeg时需要，默认None为GB28181拉流'
    },
    {
        label: '协议类型',
        type: 'radio',
        field: 'rtpWithTcp',
        tips: '请选协议类型',
        props:{
            options: [
                { label: 'UDP', value: false },
                { label: 'TCP', value: true }
            ]
        }
    },
    {
        label: '自动推流',
        type: 'switch',
        field: 'autoVideo',
        extra: '服务开启后一直推流'
    },
    {
        label: '自动断流',
        type: 'switch',
        field: 'noPlayerBreak',
        extra: '无人观看自动断流，启用自动推流请勿启用自动断流'
    },
    {
        label: '自动录制',
        type: 'switch',
        field: 'autoRecord',
        extra: '服务开启后一直推流'
    },
    {
        label: '云台控制',
        type: 'switch',
        field: 'hasPtz'
    },
    {
        label: '默认端口',
        type: 'switch',
        field: 'defaultRtpPort',
        extra: '设备是否使用流媒体默认rtp端口，如10000端口'
    },
    {
        label: '启用',
        type: 'switch',
        field: 'enabled',
        extra: '是否启用设备'
    },
]