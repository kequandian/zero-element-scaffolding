module.exports = {
    "pageName": {
        "table": "框架组件管理",
        "new": "表单组件",
        "edit": "编辑菜单"
    },
    "listAPI": "/ap",
    "createAPI": "/api/u/product/products",
    "getAPI": "/api/u/product/products/[id]",
    "updateAPI": "/api/u/product/products/[id]",
    "deleteAPI": "/api/u/product/products/(id)",
    "columns": 1,
    "type": "default",
    "createFields": [
        {
            "label": "参考文档",
            "type": "LinkButton",
            "field": "type_0",
            "options": {
                "title": "点击进入",
                "linkUrl": "https://github.com/kequandian/zero-element-docs/blob/master/docs/guide/config.md#formField"
            }
        },
        {
            "label": "文本",
            "type": "plain",
            "value": '文本',
            "field": "type_1"
        },
        {
            "label": "图片",
            "type": "image",
            "field": "type_2",
            "value": [
                {
                    "url": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                }
            ]
        },
        {
            "label": "头像",
            "type": "avatars",
            "field": "type_2",
            "value": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        },
        // {
        //     "label": "empty",
        //     "type": "empty",
        //     "field": "type_3"
        // },
        // {
        //     "label": "视频",
        //     "type": "videoview",
        //     "value": "/attachments/1b42a99b-41e1-42b7-8401-fcd9fd0ddbb0.mp4",
        //     "field": "type_4"
        // },
        // {
        //     "label": "隐藏域",
        //     "type": "hidden",
        //     "field": "type_4"
        // },
        // {
        //     "label": "",
        //     "type": "group",
        //     "value": "group-分组",
        //     "field": "type_5"
        // },
        {
            "label": "输入框",
            "type": "input",
            "field": "type_6",
            "options":{
                "width": "200"
            }
        },
        // {
        //     "label": "输入框(tips)",
        //     "type": "inputType",
        //     "field": "type_6",
        //     "toptips": "输入框(tips)",
        //     "options":{
        //         "width": "200"
        //     }
        // },
        {
            "label": "密码输入框",
            "type": "password",
            "field": "type_7"
        },
        {
            "label": "数字输入框",
            "type": "number",
            "field": "type_8"
        },
        {
            "label": "单选框",
            "type": "radio",
            "field": "type_9",
            "options": [
                {
                    "label": "选项一",
                    "value": "选项一"
                },
                {
                    "label": "选项二",
                    "value": "选项二"
                },
                {
                    "label": "选项三",
                    "value": "选项三"
                }
            ]
        },
        {
            "label": "开关按钮",
            "type": "switch",
            "field": "type_8"
        },
        {
            "label": "下拉框",
            "field": "type_10",
            "type": "select",
            "options": [
                {
                    "label": "选项一",
                    "value": "选项一"
                },
                {
                    "label": "选项二",
                    "value": "选项二"
                },
                {
                    "label": "选项三",
                    "value": "选项三"
                }
            ]
        },
        {
            "label": "复选框",
            "type": "checkbox",
            "field": "type_11",
            "options": [
                {
                    "label": "选项一",
                    "value": "选项一"
                },
                {
                    "label": "选项二",
                    "value": "选项二"
                },
                {
                    "label": "选项三",
                    "value": "选项三"
                }
            ]
        },
        {
            "label": "验证码",
            "type": "captcha",
            "field": "type_13",
            "options": {
                "API": ""
            }
        },
        {
            "label": "标签",
            "type": "tags",
            "field": "type_13"
        },
        {
            "label": "下载",
            "field": "type_14",
            "type": "download",
            "options": {
                "title": "点击下载",
                "url": "templateUrl"
            }
        },
        {
            "label": "展示json格式",
            "field": "type_15",
            "value": {
                "label": "展示json格式",
                "field": "type_15",
                "type": "json"
            },
            "type": "json"
        },
        // {
        //     "label": "week",
        //     "field": "type_16",
        //     "type": "week"
        // },
        {
            "label": "日期",
            "field": "type_16",
            "type": "date"
        },
        {
            "label": "月份",
            "field": "type_17",
            "type": "month"
        },
        {
            "label": "日期范围",
            "field": "type_18",
            "type": "range"
        },
        {
            "label": "上传",
            "field": "type_19",
            "type": "direct-upload",
            "options": {
                "title": "点击上传",
                "url": "templateUrl"
            }
        },
        {
            "label": "时分秒范围",
            "field": "type_20",
            "type": "time-range"
        },
        {
            "label": "表格选择",
            "field": "type_21",
            "type": "table-select"
        },
        {
            "label": "单选模态框",
            "field": "type_22",
            "type": "modal-radio",
            "options": {
                "title": "选择",
                "label": "name",
                "editLabel": "name",
                "value": "projectId",
                "API": "/api/u/product/products",
                "fields": [
                    {
                        "label": "商品名称",
                        "field": "name"
                    },
                    {
                        "label": "价格",
                        "field": "price"
                    }
                ]
            }
        },
        {
            "label": "复选模态框",
            "field": "type_23",
            "type": "modal-checkbox",
            "options": {
                "title": "选择",
                "label": "name",
                "editLabel": "name",
                "value": "id",
                "pagination": true,
                "API": "/api/u/product/products",
                "saveData": {
                    "masterRelations": "value"
                },
                "fields": [
                    {
                        "label": "商品名称",
                        "field": "name"
                    },
                    {
                        "label": "价格",
                        "field": "price"
                    }
                ]
            }
        },
        {
            "label": "上传图片",
            "field": "type_24",
            "type": "upload-image",
            "options": {
                "title": "点击上传",
                "url": "templateUrl"
            }
        },
        {
            "label": "上传图片",
            "field": "type_33",
            "type": "imageBox"
        },
        {
            "label": "上传文件",
            "field": "type_25",
            "type": "upload-file",
            "options": {
                "title": "点击上传",
                "url": "templateUrl"
            }
        },
        {
            "label": "复选框(网络)",
            "type": "checkbox-fetch",
            "field": "type_26",
            "options": {
                "API": "/api/u/product/products",
                "label": "name",
                "value": "id"
            }
        },
        {
            "label": "单选框(网络)",
            "field": "type_27",
            "type": "select-fetch",
            "options": {
                "API": "/api/u/product/products",
                "label": "name",
                "value": "id"
            }
        },
        // {
        //     "label": "select-field",
        //     "field": "type_28",
        //     "type": "select-field",
        //     "options": {
        //         "API": "/api/u/product/products",
        //         "label": "name",
        //         "value": "id"
        //     }
        // },
        {
            "label": "文本域",
            "type": "text-area",
            "field": "type_29"
        },
        {
            "label": "富文本",
            "type": "rich-text",
            "field": "type_30"
        },
        // {
        //     "label": "one-mary",
        //     "field": "type_31",
        //     "type": "one-mary",
        //     "options": {
        //         "fields": [
        //             {
        //                 "label": "选项一",
        //                 "field": "选项一"
        //             },
        //             {
        //                 "label": "选项二",
        //                 "field": "选项二"
        //             }
        //         ]
        //     }
        // },
        {
            "label": "数字范围",
            "field": "type_32",
            "type": "number-range"
        },
        
        {
            "label": "省市区",
            "type": "pcd",
            "field": "type_12",
            "options": {
                "API": ""
            }
        },
        // {
        //     "label": "pcdm",
        //     "field": "type_33",
        //     "type": "pcdm"
        // },
        // {
        //     "label": "pcdForSearch",
        //     "field": "type_34",
        //     "type": "pcdForSearch"
        // }
        {
            "label": "path",
            "field": "type_32",
            "type": "path"
        },
    ],
    "updateFields": [],
    "map": {},
    "layout": {
        "table": "Content",
        "form": "TitleContent"
    },
    "tableActions": [],
    "tableOperation": [],
    "searchFields": [],
    "tableFields": []
}