module.exports = {
  "pageName": {
    "table": "项目代码管理",
    "new": "添加",
    "edit": "编辑",
    "view": "详情"
  },
  "listAPI": "/api/cg/generate/code/list",
  "createAPI": "/api",
  "getAPI": "/api",
  "updateAPI": "/api",
  "deleteAPI": "/api",
  "columns": 1,
  "createFields": [
    // {
    //   "label": "权限名称",
    //   "props": {
    //     "placeholder": "请输入"
    //   },
    //   "rules": [
    //     {
    //       "type": "required"
    //     }
    //   ],
    //   "type": "input",
    //   "field": "name",
    //   "align": "center"
    // }
  ],
  "updateFields": [
    // {
    //   "label": "权限名称",
    //   "props": {
    //     "placeholder": "请输入"
    //   },
    //   "rules": [
    //     {
    //       "type": "required"
    //     }
    //   ],
    //   "type": "input",
    //   "field": "name",
    //   "align": "center"
    // }
  ],
  "map": {},
  "layout": {
    "table": "Content",
    "form": "TitleContent"
  },
  "tableActions": [
    {
      title: '创建', type: 'modal',
      options: {
        modalTitle: '基于sql创建Java项目',
        modalWidth: 550,
        style: 'primary',
        items: [
          {
            layout: 'Empty',
            component: 'Form',
            config: {
              layout: 'Grid',
              layoutConfig: {
                value: [24,0],
              },
              API: {
                createAPI: '/api/cg/generate/code'
              },
              fields: [
                { field: 'project', label: '项目名', type: 'input', "placeholder": "例子：cg-test", rules: ['required'],
                  "style":{
                    "width": 300
                  }
                },
                { field: 'module', label: '模块名', type: 'input',"placeholder": "例子：cg", rules: ['required'],
                  "style":{
                    "width": 300
                  }
                },
                { field: 'tableName', label: '数据表名', type: 'input',"placeholder": "例子：cg_master_resource", rules: ['required'],
                  "style":{
                    "width": 300
                  }
                },
                {
                  "label": "sql语句",
                  "props": {
                    "placeholder": "请输入",
                    "autoSize": {
                      "minRows": 3
                    },
                    "style":{
                      "width": 300
                    }
                  },
                  "type": "text-area",
                  "field": "sql",
                  rules: ['required']
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "tableOperation": [

    {
      "title": "下载", 
      "type": "request",
      "options": {
        "outside": true,
        "API": "/api/cg/generate/download/(name)",
        "method": "download"
      }
    },
    
    {
      "title": "删除",
      "type": "request",
      "options": {
        "outside": true,
        "tips": "确定要删除吗?",
        "API": "/api/cg/generate/code/(name)",
        "method": "delete"
      },
      "expect": {
        "permission": ""
      }
    }
  ],
  "searchFields": [
    // {
    //   "label": "权限名称",
    //   "field": "name",
    //   "type": "input",
    //   "props": {
    //     "placeholder": "请输入"
    //   }
    // }
  ],
  "tableFields": [
    {
      "label": "编号",
      "field": "index",
      "valueType": "index",
      "align": "center"
    },
    {
      "label": "项目名称",
      "field": "name"
    },
    {
      "label": "创建时间",
      "field": "createTime"
    }
  ],
  "viewConfig": [
  ]
}