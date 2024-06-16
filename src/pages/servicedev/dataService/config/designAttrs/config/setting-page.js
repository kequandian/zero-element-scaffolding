module.exports = {
  "pageName": {
    "table": "设计字段"
  },
  "columns": 2,
  "layout": {
    "table": "Content",
    "form": "TitleContent"
  },
  "map": {},
  "tableActions": [
    {
      "title": "添加",
      "type": "modal",
      "options": {
        "style": "primary",
        "modalTitle": "添加",
        "modalWidth": 600,
        "items": [
          {
            "component": "Form",
            "config": {
              "layout": "Grid",
              "layoutConfig": {
                "value": [
                  24
                ]
              },
              "API": {
                "createAPI": "/api/ds/cfg/data/services/attrs/[entityName]"
              },
              "fields": [
                {
                  "field": "name", "label": "名称", "width": "240px", 
                  "type": "input","rules": ["required"],
                  "props":{
                    "placeholder":"请输入"
                   }
                },
                {
                  "field": "attributeName", "label": "字段名", "width": "240px", 
                  "type": "input","rules": ["required"],
                  "props":{
                    "placeholder":"请输入"
                   }
                },
                {
                  "label":"字段类型",
                  "rules":[
                      {
                          "type":"required"
                      }
                  ],
                  "props":{
                      "placeholder":"请选择",
                      "style":{
                        "width": "240px"
                      }
                  },
                  "options":[
                      { "label":"小整数值(1字节)", "value":"tinyint" },
                      {"label":"小整数值(2字节)","value":"smallint"},
                      { "label":"中等整数值", "value":"mediumint" },
                      {"label":"正常整数值","value":"int"},
                      { "label":"长整数值", "value":"long" },
                      { "label":"大整数值", "value":"bigint" },
                      { "label":"单精度浮点型", "value":"float" },
                      { "label":"双精度浮点型", "value":"double" },
                      { "label":"定点数","value":"decimal" },
                      { "label":"年", "value":"year" },
                      { "label":"时间", "value":"time" },
                      { "label":"日期", "value":"date" },
                      { "label":"日期时间", "value":"datetime" },
                      { "label":"自动存储记录修改时间", "value":"timestamp" },
                      { "label":"字符串", "value":"char" },
                      {"label":"长字符串","value":"varchar"},
                      { "label":"小文本", "value":"tinytext" },
                      { "label":"文本", "value":"text" },
                      { "label":"中等文本", "value":"mediumtext" },
                      { "label":"长文本", "value":"longtext" },
                      { "label":"枚举", "value":"enum" },
                      { "label":"设置", "value":"set" },
                      { "label":"字节", "value":"bit" },
                      { "label":"二进制存储", "value":"binary" },
                      { "label":"长二进制存储", "value":"varbinary" },
                      { "label":"小blob", "value":"tinyblob" },
                      { "label":"正常blob", "value":"blob" },
                      { "label":"中blob", "value":"mediumblob" },
                      { "label":"长blob", "value":"longblob" }
                  ],
                  "type":"select",
                  "field":"dataType"
              }
              ]
            }
          }
        ]
      },
      "expect": {
      }
    }
  ],
  "tableOperation": [
    {
      "title": "编辑",
      "type": "modal",
      "options": {
        "modalTitle": "编辑",
        "modalWidth": 600,
        "outside": true,
        "items": [
          {
            "component": "Form",
            "config": {
              "layout": "Grid",
              "layoutConfig": {
                "value": [
                  24
                ]
              },
              "API": {
                "getAPI": "/api/ds/cfg/data/services/attrs/[entityName]/(id)",
                "updateAPI": "/api/ds/cfg/data/services/attrs/[entityName]/(id)"
              },
              "fields": [
                {
                  "field": "name", "label": "名称", "width": "240px", 
                  "type": "input","rules": ["required"],
                  "props":{
                    "placeholder":"请输入"
                   }
                },
                {
                  "field": "attributeName", "label": "字段名", "width": "240px", 
                  "type": "input","rules": ["required"],
                  "props":{
                    "placeholder":"请输入"
                   }
                },
                {
                  "label":"字段类型",
                  "rules":[
                      {
                          "type":"required"
                      }
                  ],
                  "props":{
                      "placeholder":"请选择",
                      "style":{
                        "width": "240px"
                      }
                  },
                  "options":[
                      { "label":"小整数值(1字节)", "value":"tinyint" },
                      {"label":"小整数值(2字节)","value":"smallint"},
                      { "label":"中等整数值", "value":"mediumint" },
                      {"label":"正常整数值","value":"int"},
                      { "label":"长整数值", "value":"long" },
                      { "label":"大整数值", "value":"bigint" },
                      { "label":"单精度浮点型", "value":"float" },
                      { "label":"双精度浮点型", "value":"double" },
                      {"label":"定点数","value":"decimal"},
                      { "label":"年", "value":"year" },
                      { "label":"时间", "value":"time" },
                      { "label":"日期", "value":"date" },
                      { "label":"日期时间", "value":"datetime" },
                      { "label":"自动存储记录修改时间", "value":"timestamp" },
                      { "label":"字符串", "value":"char" },
                      {"label":"长字符串","value":"varchar"},
                      { "label":"小文本", "value":"tinytext" },
                      { "label":"文本", "value":"text" },
                      { "label":"中等文本", "value":"mediumtext" },
                      { "label":"长文本", "value":"longtext" },
                      { "label":"枚举", "value":"enum" },
                      { "label":"设置", "value":"set" },
                      { "label":"字节", "value":"bit" },
                      { "label":"二进制存储", "value":"binary" },
                      { "label":"长二进制存储", "value":"varbinary" },
                      { "label":"小blob", "value":"tinyblob" },
                      { "label":"正常blob", "value":"blob" },
                      { "label":"中blob", "value":"mediumblob" },
                      { "label":"长blob", "value":"longblob" }
                  ],
                  "span":"24",
                  
                  "type":"select",
                  "field":"dataType"
              }
              ]
            }
          }
        ]
      },
      "expect": {
        "permission": ""
      }
    },
    {
      "title": "删除",
      "type": "request",
      "options": {
        "outside": true,
        "tips": "确定要删除吗?",
        "API": "/api/ds/cfg/data/services/attrs/[entityName]/(id)",
        "method": "delete"
      }
    }
  ],
  "createFields": [
    {}
  ],
  "updateFields": [
    {}
  ],
  "viewFields": [
    {}
  ],
  "listAPI": "/api/ds/cfg/data/services/attrs/[entityName]",
  "createAPI": "/api/[id]",
  "getAPI": "/api/ds/cfg/data/services/attrs/[entityName]/(id)",
  "updateAPI": "/api/(id)",
  "deleteAPI": "/api/ds/cfg/data/services/attrs/[entityName]/(id)",
  "searchFields": [
    {
      "field": "attributeName",
      "label": "字段名",
      "type": "input",
      "props": {
        "placeholder": "请输入..."
      }
    }
  ],
  "tableFields": [
    {
      "label": "名称",
      "field": "name"
    },
    {
      "label": "字段名",
      "field": "attributeName"
    }
  ],
  "viewConfig": [
    {
      "title": "详情",
      "type": "plain",
      "fields": [
        {
          "label": "名字",
          "field": "name"
        }
      ]
    }
  ]
}