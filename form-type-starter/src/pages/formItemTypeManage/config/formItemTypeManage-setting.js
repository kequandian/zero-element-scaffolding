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
            "label": "文本（plain）",
            "type": "plain",
            "value": '文本',
            "field": "type_1"
        },
        // {
        //     "label": "状态转换（map）",
        //     "type": "map",
        //     "value": '文本',
        //     "field": "type_1"
        // },
        {
            "label": "图片（image）",
            "type": "image",
            "field": "type_2",
            "value": [
                {
                    "url": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                }
            ]
        },
        {
            "label": "头像（avatars）",
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
            "label": "输入框（input）",
            "type": "input",
            "field": "type_6",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        // {
        //     "label": "输入框(tips)",
        //     "type": "inputType",
        //     "field": "type_6",
        //     "toptips": "输入提示",
        //     "props":{
        //         "style":{
        //             "width": "300px",
        //         }
        //     }
        // },
        {
            "label": "密码输入框（password）",
            "type": "password",
            "field": "type_7",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        {
            "label": "数字输入框（number）",
            "type": "number",
            "field": "type_8",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        {
            "label": "单选框（radio）",
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
            "label": "开关按钮（switch）",
            "type": "switch",
            "field": "type_8"
        },
        {
            "label": "下拉框（select）",
            "field": "type_10",
            "type": "select",
            "props":{
                "style":{
                    "width": "300px",
                }
            },
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
            "label": "复选框（checkbox）",
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
            "label": "验证码（captcha）",
            "type": "captcha",
            "field": "type_13",
            "options": {
                "API": ""
            },
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        // {
        //     "label": "标签（tags）",
        //     "type": "tags",
        //     "field": "type_13"
        // },
        {
            "label": "下载（download）",
            "field": "type_14",
            "type": "download",
            "options": {
                "title": "点击下载",
                "url": "templateUrl"
            }
        },
        {
            "label": "展示json格式（json）",
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
            "label": "日期（date）",
            "field": "type_16",
            "type": "date",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        {
            "label": "月份（month）",
            "field": "type_17",
            "type": "month",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        {
            "label": "日期范围（range）",
            "field": "type_18",
            "type": "range",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        {
            "label": "上传（direct-upload）",
            "field": "type_19",
            "type": "direct-upload",
            "options": {
                "title": "点击上传",
                "url": "templateUrl"
            }
        },
        {
            "label": "时分秒范围（time-range）",
            "field": "type_20",
            "type": "time-range",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        {
            "label": "表格选择（table-select）",
            "field": "type_21",
            "type": "table-select"
        },
        {
            "label": "单选模态框（modal-radio）",
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
            "label": "复选模态框（modal-checkbox）",
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
            "label": "上传图片（upload-image）",
            "field": "type_24",
            "type": "upload-image",
            "options": {
                "title": "点击上传",
                "url": "templateUrl"
            }
        },
        {
            "label": "上传图片（imageBox）",
            "field": "type_33",
            "type": "imageBox"
        },
        {
            "label": "上传文件（upload-file）",
            "field": "type_25",
            "type": "upload-file",
            "options": {
                "title": "点击上传",
                "url": "templateUrl"
            }
        },
        {
            "label": "复选框(网络)（checkbox-fetch）",
            "type": "checkbox-fetch",
            "field": "type_26",
            "options": {
                "API": "/api/u/product/products",
                "label": "name",
                "value": "id"
            }
        },
        {
            "label": "单选框(网络)（select-fetch）",
            "field": "type_27",
            "type": "select-fetch",
            "options": {
                "API": "/api/u/product/products",
                "label": "name",
                "value": "id"
            },
            "props":{
                "style":{
                    "width": "300px",
                }
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
            "label": "文本域（text-area）",
            "type": "text-area",
            "field": "type_29",
            "props":{
                "style":{
                    "width": "400px",
                }
            }
        },
        {
            "label": "富文本（rich-text）",
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
            "label": "数字范围（number-range）",
            "field": "type_32",
            "type": "number-range",
            "props":{
                "style":{
                    "width": "300px",
                }
            }
        },
        
        {
            "label": "省市区（pcd）",
            "type": "pcd",
            "field": "type_12",
            "props":{
                "style":{
                    "width": "300px",
                }
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
        // {
        //     "label": "页面跳转（path）",
        //     "field": "type_32",
        //     "type": "path",
        //     "value": "/TestPage",
        //     "title": "TestPage"
        // }
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