export const fieldsConfig = [
    {
        "label":"列表项标识",
        "field":"listColumnKey"
    },
    {
        "label":"列表项名称",
        "field":"listColumnName"
    },
    {
        "label":"列表项组件类型",
        "field":"listColumnType",
        "type":"select",
        "options":[
            { "label":"index", "value":"index" }, 
            { "label":"video", "value":"video" },
            { "label":"plain", "value":"plain" }, 
            { "label":"join", "value":"join" }, 
            { "label":"map", "value":"map" },
            { "label":"image", "value":"image" }, 
            { "label":"thumb", "value":"thumb" }, 
            { "label":"tag", "value":"tag" }, 
            { "label":"dot", "value":"dot" }, 
            { "label":"currency", "value":"currency" }, 
            { "label":"percentage", "value":"percentage" }, 
            { "label":"url", "value":"url" }, 
            { "label":"download", "value":"download" }, 
            { "label":"ellipsis", "value":"ellipsis" }, 
            { "label":"complex", "value":"complex" }, 
            { "label":"count-down", "value":"count-down" }, 
            { "label":"input-number", "value":"input-number" }, 
            { "label":"input-text", "value":"input-text" }, 
            { "label":"input-select", "value":"input-select" }, 
            { "label":"input-select-fetch", "value":"input-select-fetch" }
        ]
    },
    {
        "label":"字段组件唯一名称",
        "field":"fieldItemName"
    },
    {
        "label":"绑定字段名称",
        "field":"fieldBinding"
    },
    {
        "label":"字段名称",
        "field":"fieldLabel"
    },
    { "label":"字段表单标题", "field":"formFieldTitle" },
    { "label":"字段表单提示", "field":"formFieldHint" },
    { "label":"字段表单输入错误提示", "field":"formFieldTips" },
    { "label":"表单项是否必填", "field":"formInputRequired","type":"switch" },
    { "label":"右侧说明", "field":"formFieldQuestion" },
    {
        "header":"高级设置",
        "children":[
            {
                "label":"字体加粗",
                "field":"listFontWeight",
                "type":"select","options":[
                    {"label":"100","value":"100"},
                    {"label":"200","value":"200"},
                    {"label":"300","value":"300"},
                    {"label":"400","value":"400"},
                    {"label":"500","value":"500"},
                    {"label":"600","value":"600"},
                    {"label":"700","value":"700"},
                    {"label":"800","value":"800"},
                    {"label":"900","value":"900"},
                    { "label":"bold", "value":"bold" },
                    { "label":"bolder", "value":"bolder" },
                    { "label":"normal", "value":"normal" },
                    { "label":"lighter", "value":"lighter" },
                ]
            },
            
            {
                "label":"字体大小",
                "field":"listFontSize",
                "type":"number"
            },
            {
                "label":"字体颜色",
                "field":"listFontColor"
            },
            {
                "label":"列表布局",
                "field":"listColumnLayout",
                "type":"select",
                "options":[
                    { "label":"Empty", "value":"Empty" },
                    { "label":"Title", "value":"Title" },
                    { "label":"BaseTitle", "value":"BaseTitle" },
                    { "label":"NotTitleContent", "value":"NotTitleContent" },
                    { "label":"TitleContent", "value":"TitleContent" },
                    { "label":"Loading", "value":"Loading" },
                    { "label":"Alone", "value":"Alone" },
                    { "label":"Row", "value":"Row" },
                    { "label":"SearchLayout", "value":"SearchLayout" },
                    { "label":"Grid", "value":"Grid" },
                    { "label":"Content", "value":"Content" },
                    { "label":"Items", "value":"Items" },
                ]
            },
            {
                "label":"列表对齐",
                "field":"listColumnAlign",
                "type":"select",
                "options":[
                    { "label":"left", "value":"left" },
                    { "label":"center", "value":"center" },
                    { "label":"right", "value":"right" },
                ]
            },
            {
                "label":"列表项宽度",
                "field":"listColumnWidth",
                "type":"number"
            },
            {
                "label":"列表项接引路由",
                "field":"listColumnReference"
            },
            {
                "label":"列表项显示格式",
                "field":"listColumnFormat"
            },
            {
                "label":"组件附加属性",
                "field":"listColumnOptions",
                "type":"JSON"
            },
            {
                "label":"复合列表项组合类型",
                "field":"listColumnMultiType",
                "type":"select",
                "options":[
                    { "label":"index", "value":"index" }, 
                    { "label":"video", "value":"video" },
                    { "label":"plain", "value":"plain" }, 
                    { "label":"join", "value":"join" }, 
                    { "label":"map", "value":"map" },
                    { "label":"image", "value":"image" }, 
                    { "label":"thumb", "value":"thumb" }, 
                    { "label":"tag", "value":"tag" }, 
                    { "label":"dot", "value":"dot" }, 
                    { "label":"currency", "value":"currency" }, 
                    { "label":"percentage", "value":"percentage" }, 
                    { "label":"url", "value":"url" }, 
                    { "label":"download", "value":"download" }, 
                    { "label":"ellipsis", "value":"ellipsis" }, 
                    { "label":"complex", "value":"complex" }, 
                    { "label":"count-down", "value":"count-down" }, 
                    { "label":"input-number", "value":"input-number" }, 
                    { "label":"input-text", "value":"input-text" }, 
                    { "label":"input-select", "value":"input-select" }, 
                    { "label":"input-select-fetch", "value":"input-select-fetch" }
                ] 
            },
            {
                "label":"复合列表项",
                "field":"listColumnMultiKeys",
                "type":"JSON"
            },
            { "label":"字段值下拉框选项", "field":"fieldValueOptions","type":"JSON"},
            { "label":"字段值过滤", "field":"fieldValueFilter","type":"JSON" },
            { "label":"字段范围", "field":"fieldScopes","type":"select","mode":"multiple","options":[
                {"label":"page","value":"page"},
                {"label":"filter","value":"filter"},
                {"label":"table","value":"table"},
                {"label":"edit","value":"edit"},
                {"label":"add","value":"add"},
                {"label":"view","value":"view"}
            ]  },
            { "label":"唯一范围", "field":"fieldScope","type":"select","options":[
                {"label":"page","value":"page"},
                {"label":"filter","value":"filter"},
                {"label":"table","value":"table"},
                {"label":"edit","value":"edit"},
                {"label":"add","value":"add"},
                {"label":"view","value":"view"}
            ] },
            { "label":"表单输入组件类型", "field":"formInputType","type":"select",
            "options":[
                { "label":"index", "value":"index" }, 
                { "label":"video", "value":"video" },
                { "label":"plain", "value":"plain" }, 
                { "label":"join", "value":"join" }, 
                { "label":"map", "value":"map" },
                { "label":"image", "value":"image" }, 
                { "label":"thumb", "value":"thumb" }, 
                { "label":"tag", "value":"tag" }, 
                { "label":"dot", "value":"dot" }, 
                { "label":"currency", "value":"currency" }, 
                { "label":"percentage", "value":"percentage" }, 
                { "label":"url", "value":"url" }, 
                { "label":"download", "value":"download" }, 
                { "label":"ellipsis", "value":"ellipsis" }, 
                { "label":"complex", "value":"complex" }, 
                { "label":"count-down", "value":"count-down" }, 
                { "label":"input-number", "value":"input-number" }, 
                { "label":"input-text", "value":"input-text" }, 
                { "label":"input-select", "value":"input-select" }, 
                { "label":"input-select-fetch", "value":"input-select-fetch" }
            ] },
            { "label":"表单输入组件属性", "field":"formInputOptions","type":"JSON" },
            { "label":"表单显示属性", "field":"formViewType","type":"select",
            "options":[
                { "label":"index", "value":"index" }, 
                { "label":"video", "value":"video" },
                { "label":"plain", "value":"plain" }, 
                { "label":"join", "value":"join" }, 
                { "label":"map", "value":"map" },
                { "label":"image", "value":"image" }, 
                { "label":"thumb", "value":"thumb" }, 
                { "label":"tag", "value":"tag" }, 
                { "label":"dot", "value":"dot" }, 
                { "label":"currency", "value":"currency" }, 
                { "label":"percentage", "value":"percentage" }, 
                { "label":"url", "value":"url" }, 
                { "label":"download", "value":"download" }, 
                { "label":"ellipsis", "value":"ellipsis" }, 
                { "label":"complex", "value":"complex" }, 
                { "label":"count-down", "value":"count-down" }, 
                { "label":"input-number", "value":"input-number" }, 
                { "label":"input-text", "value":"input-text" }, 
                { "label":"input-select", "value":"input-select" }, 
                { "label":"input-select-fetch", "value":"input-select-fetch" }
            ] },
            { "label":"表单显示组件属性", "field":"formViewOptions","type":"JSON" },
        ]
    },

    // { "label":"所属页面id", "field":"pageId" }
]

export const MainPageConfig = [
    { "label":"页面标题", "field":"pageTitle" },
    { "label":"数据接口", "field":"apiEndpoint" },
    { "label":"新建页面标题", "field":"formAddTitle" },
    { "label":"页面视图标题", "field":"formViewTitle" },
    { "label":"页面编辑标题", "field":"formEditTitle" },
    { "label":"页面内容布局", "field":"contentLayout","type":"select",
    "options":[
        { "label":"Empty", "value":"Empty" },
        { "label":"Title", "value":"Title" },
        { "label":"BaseTitle", "value":"BaseTitle" },
        { "label":"NotTitleContent", "value":"NotTitleContent" },
        { "label":"TitleContent", "value":"TitleContent" },
        { "label":"Loading", "value":"Loading" },
        { "label":"Alone", "value":"Alone" },
        { "label":"Row", "value":"Row" },
        { "label":"SearchLayout", "value":"SearchLayout" },
        { "label":"Grid", "value":"Grid" },
        { "label":"Content", "value":"Content" },
        { "label":"Items", "value":"Items" },
    ] },
    { "label":"组件列表排序", "field":"contentItems" },
    { "label":"组件容器属性", "field":"contentItemContainerStyle","type":"JSON" },
    { "label":"列表字段", "field":"listFields","type":"JSON" },
    { "label":"列表操作排列", "field":"listOperationFields","type":"JSON" },
    { "label":"表单新建字段排列", "field":"formAddFields","type":"JSON" },
    { "label":"列表视图字段排列", "field":"formViewFields","type":"JSON" },
    { "label":"列表编辑字段排列", "field":"formEditFields","type":"JSON" },
    { "label":"表单默认内容布局", "field":"formDefaultContentLayout", "type":"select",
    "options":[
        { "label":"Empty", "value":"Empty" },
        { "label":"Title", "value":"Title" },
        { "label":"BaseTitle", "value":"BaseTitle" },
        { "label":"NotTitleContent", "value":"NotTitleContent" },
        { "label":"TitleContent", "value":"TitleContent" },
        { "label":"Loading", "value":"Loading" },
        { "label":"Alone", "value":"Alone" },
        { "label":"Row", "value":"Row" },
        { "label":"SearchLayout", "value":"SearchLayout" },
        { "label":"Grid", "value":"Grid" },
        { "label":"Content", "value":"Content" },
        { "label":"Items", "value":"Items" },
    ] },
    { "label":"表单模态框默认宽度", "field":"formDefaultWidth","type":"number" }
]
export const ComponentTypeConfig = [
    { "label":"组件标识名称", "field":"fieldItemName" },
    { "label":"属性名称", "field":"propertyName" },
    { "label":"属性值", "field":"propertyValue" },
    { "label":"组件属性作用域", "field":"scope","type":"select","mode":"multiple","options":[
        {"label":"page","value":"page"},
        {"label":"filter","value":"filter"},
        {"label":"table","value":"table"},
        {"label":"edit","value":"edit"},
        {"label":"add","value":"add"},
        {"label":"view","value":"view"}
    ] },
    { "label":"所属字段组件ID", "field":"fieldId" },
]
export const FiltersConfig = [
    { "label":"搜索字段布局名称", "field":"contentLayout", "type":"select",
    "options":[
        { "label":"Empty", "value":"Empty" },
        { "label":"Title", "value":"Title" },
        { "label":"BaseTitle", "value":"BaseTitle" },
        { "label":"NotTitleContent", "value":"NotTitleContent" },
        { "label":"TitleContent", "value":"TitleContent" },
        { "label":"Loading", "value":"Loading" },
        { "label":"Alone", "value":"Alone" },
        { "label":"Row", "value":"Row" },
        { "label":"SearchLayout", "value":"SearchLayout" },
        { "label":"Grid", "value":"Grid" },
        { "label":"Content", "value":"Content" },
        { "label":"Items", "value":"Items" },
    ] },
    { "label":"引用字段组件属性", "field":"searchFields","type":"JSON" },
    { "label":"搜索框内提示", "field":"defaultSearchHint" },
    // { "label":"所属页面ID", "field":"pageId" },
]

export const ActionsConfig = [
    { "label":"标题", "field":"title" },
    { "label":"操作路由路径", "field":"path" },
    { "label":"操作类型", "field":"type","type":"select","options":[
        {"label":"request","value":"request"},
        {"label":"path","value":"path"},
        {"label":"delete","value":"delete"},
        {"label":"modal.add","value":"modal.add"},
        {"label":"modal.update","value":"modal.update"}
    ] },
    { "label":"请求API", "field":"requestApi","type":"select","options":[
        {"label":"getApi","value":"getApi"},
        {"label":"updateApi","value":"updateApi"},
        {"label":"createApi","value":"createApi"}
    ]  },
    { "label":"请求结果刷新API", "field":"requestRefreshApi" },
    { "label":"请求方法", "field":"requestMethod","type":"select","options":[
        {"label":"GET","value":"GET"},
        {"label":"POST","value":"POST"},
        {"label":"UPDATE","value":"UPDATE"},
        {"label":"DELETE","value":"DELETE"}
    ] },
    { "label":"请求数据", "field":"requestBody","type":"JSON" },
    { "label":"请求参数", "field":"requestOptions","type":"JSON" },
    // { "label":"所属页面id", "field":"pageId" },
]

export const OperationsConfig = [
    { "label":"标题", "field":"title" },
    { "label":"操作类型", "field":"type","type":"select","options":[
        {"label":"request","value":"request"},
        {"label":"path","value":"path"},
        {"label":"delete","value":"delete"},
        {"label":"modal.add","value":"modal.add"},
        {"label":"modal.update","value":"modal.update"}
    ] },
    { "label":"操作路由路径", "field":"path" },
    { "label":"是否显示在列表中", "field":"outside","type":"switch" },
    { "label":"请求API", "field":"requestApi","type":"select","options":[
        {"label":"getApi","value":"getApi"},
        {"label":"updateApi","value":"updateApi"},
        {"label":"createApi","value":"createApi"}
    ]  },
    { "label":"请求结果API", "field":"requestRefreshApi" },
    { "label":"请求方法", "field":"requestMethod","type":"select","options":[
        {"label":"GET","value":"GET"},
        {"label":"POST","value":"POST"},
        {"label":"UPDATE","value":"UPDATE"},
        {"label":"DELETE","value":"DELETE"}
    ] },
    { "label":"请求数据", "field":"requestBody","type":"JSON" },
    { "label":"请求参数", "field":"requestOptions","type":"JSON" },
    // { "label":"所属页面ID", "field":"pageId" },
]