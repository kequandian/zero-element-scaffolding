// 只需写配置，方便可扩展
export const defaultCommonSettings = {
    $id: {
      title: 'ID',
      description: '数据存储的名称/英文/必填',
      type: 'string',
      'ui:widget': 'idInput',
    },
    title: {
      title: '标题',
      type: 'string',
    },
    // description: {
    //   title: '说明',
    //   type: 'string',
    // },
    'ui:width': {
      title: '元素宽度',
      type: 'string',
      'ui:widget': 'percentSlider',
    },
    'ui:labelWidth': {
      title: '标签宽度',
      description: '默认值120',
      type: 'number',
      'ui:widget': 'slider',
      max: 400,
      'ui:options': {
        hideNumber: true,
      },
    },
    'ui:default': {
      title: '默认值',
      type: 'string',
    },
    'ui:readonly': {
      title: '置灰',
      type: 'boolean',
    },
  };
  
  // widget 用于schema中每个元素对应的右侧配置知道用哪个setting
  
  // 宏组件设置
  export const HongConfig = [
    {
      text:"获取用户名",
      name:"GetUserName",
      widget:"GetUserName",
      schema:{
        type:"string",
        "ui:widget":"GetUserName",
      }
    },
    {
      text:'获取实时',
      name:"GetTime",
      widget:'NowAll',
      schema:{
        type:'string',
        'ui:widget':"NowAll",
      },
      setting:{
        'ui:widget':{
          type:'string',
          title:'时间格式（选择不可逆！请最后配置）',
          enum:[
          'NowAll',
          'NowDays',
          'NowTimes'],
          enumNames:[
            'yyyy-mm-dd 00:00:00',
            'yyyy-mm-dd',
            '00:00:00',
          ]
        }
      },
    },
    {
      text:"部门名称",
      name:"getDepName",
      widget:"GetDepName",
      schema:{
        type:"string",
        'ui:widget':'GetDepName'
      }
    },
    {
      text:"用户角色",
      name:"getrole",
      widget:"Getrole",
      schema:{
        type:"string",
        'ui:widget':'Getrole'
      }
    },
    {
      text:"用户职位",
      name:"getposition",
      widget:"Getposition",
      schema:{
        type:"string",
        'ui:widget':'Getposition'
      }
    },
    {
      text:"表单名称编号",
      name:"formnan",
      widget:"FormNaN",
      schema:{
        type:"string",
        'ui:widget':'FormNaN'
      }
    },
    {
      text:"用户部门主管",
      name:"getheadofdep",
      widget:"GetHeadOfDep",
      schema:{
        type:"string",
        'ui:widget':'GetHeadOfDep'
      }
    },
    {
      text:"分公司名称",
      name:"getbraoffice",
      widget:"GetBraOffice",
      schema:{
        type:"string",
        'ui:widget':'GetBraOffice'
      }
    },
    {
      text:"流程开始时间",
      name:"process",
      widget:"ProcessStart",
      schema:{
        type:"string",
        'ui:widget':"ProcessStart"
      }
    },
    {
      text:"流水号",
      name:"serialnumber",
      widget:"SerialNumber",
      schema:{
        type:"string",
        'ui:widget':"SerialNumber"
      }
    },
    {
      text:"步骤经办人",
      name:"stepHandler",
      widget:"StepHandler",
      schema:{
        type:"string",
        "ui:widget":"StepHandler"
      }
    },
  ]

  export const elements = [
    {
      text: '输入框',
      name: 'input',
      widget: 'input',
      schema: {
        title: '输入框',
        type: 'string',
        componentType: 'input'
      },
      setting: {
        'ui:options': {
          title: '特殊选项',
          type: 'object',
          'ui:labelWidth': 80,
          properties: {
            allowClear: {
              title: '是否带清除按钮',
              description: '填写内容后才会出现x哦',
              type: 'boolean',
            },
            /* addonBefore: {
              title: '前tab',
              type: 'string',
              default:'http://'
            },
            addonAfter: {
              title: '后tab',
              type: 'string',
              default:'.com'
            }, */
        //     prefix: {
        //       title: '前缀',
        //       type: 'string',
        //     },
        //     suffix: {
        //       title: '后缀',
        //       type: 'string',
        //     },
        //   },
        // },
        // minLength: {
        //   title: '最短字数',
        //   type: 'number',
        // },
        // maxLength: {
        //   title: '最长字数',
        //   type: 'number',
        // },
        // pattern: {
        //   title: '校验正则表达式',
        //   type: 'string',
        //   'ui:options': {
        //     placeholder: '填写正则表达式',
          },
        },
      },
    },
    {
      text:'网站',
      name:"web",
      schema:{
        type:'string',
        "ui:widget":"Url",
        format:'url',
        componentType:"input",
        placeholder:"请键入网址",

      },
      widget:"Url",
    },
    {
      text: '大输入框',
      name: 'textarea',
      widget: 'textarea',
      schema: {
        title: '编辑框',
        type: 'string',
        format: 'textarea',
        componentType: 'text-area'
      },
      setting: {
        // 'ui:options': {
        //   title: '选项',
        //   type: 'object',
        //   'ui:labelWidth': 80,
        //   properties: {
        //     autoSize: {
        //       title: '高度自动',
        //       type: 'boolean',
        //     },
        //     row: {
        //       title: '指定高度',
        //       type: 'number',
        //     },
        //   },
        // },
        // minLength: {
        //   title: '最短字数',
        //   type: 'number',
        // },
        // maxLength: {
        //   title: '最长字数',
        //   type: 'number',
        // },
        // pattern: {
        //   title: '校验正则表达式',
        //   type: 'string',
        //   'ui:options': {
        //     placeholder: '填写正则表达式',
        //   },
        // },
      },
    },
  
    {
      text: '日期选择',
      name: 'date',
      widget: 'date',
      schema: {
        title: '日期选择',
        type: 'string',
        format: 'date',
        componentType: 'date'
      },
      setting: {
        format: {
          title: '格式',
          type: 'string',
          enum: ['dateTime', 'date', 'time'],
          enumNames: ['日期时间', '日期', '时间'],
        },
      },
    },
    {
      text: '数字输入框',
      name: 'number',
      widget: 'number',
      schema: {
        title: '数字输入框',
        type: 'number',
        componentType: 'number'
      },
      setting: {},
    },
    // {
    //   text: '是否选择',
    //   name: 'checkbox',
    //   widget: 'checkbox',
    //   schema: {
    //     title: '是否选择',
    //     type: 'boolean',
    //   },
    //   setting: {
    //     default: {
    //       title: '是否默认勾选',
    //       type: 'boolean',
    //     },
    //   },
    // },
    // {
    //   text: '是否switch',
    //   name: 'switch',
    //   widget: 'switch',
    //   schema: {
    //     title: '是否选择',
    //     type: 'boolean',
    //     'ui:widget': 'switch',
    //   },
    //   setting: {
    //     default: {
    //       title: '是否默认开启',
    //       type: 'boolean',
    //     },
    //   },
    // },
    {
      text: '下拉单选',
      name: 'select',
      widget: 'select',
      schema: {
        title: '单选',
        type: 'string',
        enum: ['a', 'b', 'c'],
        // enumNames: ['早', '中', '晚'],
        componentType: 'select'
      },
      setting: {
        enum: {
          title: '选项名称',
          type: 'array',
          enum: [],
          'ui:widget': 'select',
          'ui:options': {
            mode: 'tags',
          },
        },
        // enumNames: {
        //   title: '选项名称',
        //   type: 'array',
        //   enum: [],
        //   'ui:widget': 'select',
        //   'ui:options': {
        //     mode: 'tags',
        //   },
        // },
      },
    },
    {
      text: '点击单选',
      name: 'radio',
      widget: 'radio',
      schema: {
        title: '单选',
        type: 'string',
        enum: ['a', 'b', 'c'],
        // enumNames: ['早', '中', '晚'],
        'ui:widget': 'radio',
        componentType: 'radio'
      },
      setting: {
        enum: {
          title: '选项字段',
          type: 'array',
          enum: [],
          'ui:widget': 'select',
          'ui:options': {
            mode: 'tags',
          },
        },
        // enumNames: {
        //   title: '选项名称',
        //   type: 'array',
        //   enum: [],
        //   'ui:widget': 'select',
        //   'ui:options': {
        //     mode: 'tags',
        //   },
        // },
      },
    },
    {
      text: '下拉多选',
      name: 'multiSelect',
      widget: 'multiSelect',
      schema: {
        title: '多选',
        description: '下拉多选',
        type: 'array',
        items: {
          type: 'string',
        },
        enum: ['A', 'B', 'C', 'D'],
        // enumNames: ['杭州', '武汉', '湖州', '贵阳'],
        'ui:widget': 'multiSelect',
      },
      setting: {
        enum: {
          title: '选项字段',
          type: 'array',
          enum: [],
          'ui:widget': 'select',
          'ui:options': {
            mode: 'tags',
          },
        },
        enumNames: {
          title: '选项名称',
          type: 'array',
          enum: [],
          'ui:widget': 'select',
          'ui:options': {
            mode: 'tags',
          },
        },
      },
    },
    {
      text: '点击多选',
      name: 'checkboxes',
      widget: 'checkboxes',
      schema: {
        title: '多选',
        description: '点击多选',
        type: 'array',
        items: {
          type: 'string',
        },
        enum: ['A', 'B', 'C', 'D'],
        // enumNames: ['杭州', '武汉', '湖州', '贵阳'],
        componentType: 'checkbox'
        
      },
      setting: {
        enum: {
          title: '选项字段',
          type: 'array',
          enum: [],
          'ui:widget': 'select',
          'ui:options': {
            mode: 'tags',
          },
        },
        // enumNames: {
        //   title: '选项名称',
        //   type: 'array',
        //   enum: [],
        //   'ui:widget': 'select',
        //   'ui:options': {
        //     mode: 'tags',
        //   },
        // },  
      },
    },
  ];
  
  export const advancedElements = [
    {
      text:'电子签章',
      name:"EleSign",
      widget:"Elesign",
      schema:{
        type:'string',
        'ui:widget':'Elesign',
        "ui:width":"220px"
      },
      setting:{
        "src":{
          title:'签章图片地址',
          type:'string',
        }
      }
    },
    {
      text:"子表单",
      name:"getlist",
      schema:{
        type:"string",
        "ui:widget":"GetList",
        componentType:"childForm"
      },
      widget:"GetList",
      setting:{
            "title":{
              title:"表单名称",
              type:'string',
            },
            "componentType":{
              title:'组件类型',
              type:'string',
              'ui:readonly':true
            },
            code:{
              title:'code字段',
              type:"string",
          }
      }
    },
    {
      text: '日历',
      name: 'calendar',
      schema: {
        title: '',
        type: 'string',
        'ui:widget': 'CalendarCom',
      },
      widget: 'CalendarCom',
      // setting: {
      //   api: { title: 'api', type: 'string' },
      // },
    },
    {
      text: '日期范围',
      name: 'dateRange',
      widget: 'dateRange',
      schema: {
        title: '日期范围',
        type: 'range',
        format: 'dateTime',
        'ui:options': {
          placeholder: ['开始时间', '结束时间'],
        },
      },
      setting: {
        format: {
          title: '类型',
          type: 'string',
          enum: ['dateTime', 'date'],
          enumNames: ['日期时间', '日期'],
        },
      },
    },
    {
      text: '数字（slider）',
      name: 'slider',
      widget: 'slider',
      schema: {
        title: '带滑动条',
        type: 'number',
        'ui:widget': 'slider',
      },
      setting: {},
    },
    {
      text: '图片展示',
      name: 'image',
      // widget: 'input',
      schema: {
        title: '图片展示',
        type: 'string',
        format: 'image',
        "ui:widget":"elesign"
      },
      setting: {},
    },
    {
      text: '附件上传',
      name: 'upload',
      schema:{
        title:"附件上传",
        type:"string",
        format:"upload",
      },
    },
    {
      text: '颜色选择',
      name: 'color',
      widget: 'color',
      schema: {
        title: '颜色选择',
        type: 'string',
        format: 'color',
      },
      setting: {},
    },
  ];
  export const layouts = [
    {
      text: '对象',
      name: 'object',
      schema: {
        title: '对象',
        type: 'object',
        properties: {},
      },
      widget: 'map',
      setting: {},
    },
    {
      text:"树状目录",
      name:'treelist',
      widget:'TreeDir',
      schema:{
        title:"树状目录",
        type:'string',
        'ui:widget':'TreeDir'
      },
      setting:{
        "TreeTitle":{
          title:"标题",
          type:"string"
        }
      }
    },
    {
      text:"树状目录选择",
      name:'treelistselect',
      widget:'TreeSelect',
      schema:{
        title:"树状目录选择",
        type:'string',
        'ui:widget':'TreeSelect'
      },
      setting:{
        "TreeTitle":{
          title:"标题",
          type:"string"
        }
      }
    },
    {
      text: '列表-数组',
      name: 'list',
      widget: 'list',
      schema: {
        title: '数组',
        type: 'array',
        items: {
          type: 'object',
          properties: {},
        },
      },
      setting: {
        minItems: {
          title: '最小长度',
          type: 'number',
        },
        maxItems: {
          title: '最大长度',
          type: 'number',
        },
        'ui:options': {
          title: '选项',
          type: 'object',
          properties: {
            foldable: {
              title: '是否可折叠',
              type: 'boolean',
            },
          },
        },
      },
    },
  ];
  
  const saves = [
    {
      text: '复杂结构样例',
      name: 'something',
      schema: {
        title: '对象',
        description: '这是一个对象类型',
        type: 'object',
        properties: {
          inputName: {
            title: '简单输入框',
            type: 'string',
          },
          selectName: {
            title: '单选',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['早', '中', '晚'],
          },
          dateName: {
            title: '时间选择',
            type: 'string',
            format: 'date',
          },
          listName: {
            title: '对象数组',
            description: '对象数组嵌套功能',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                rangeName: {
                  title: '日期/时间范围',
                  type: 'range',
                  format: 'date',
                  'ui:options': {
                    placeholder: ['开始日期', '结束日期'],
                  },
                },
              },
            },
          },
        },
      },
    },
  ];
  
  export const defaultSettings = [
    {
      title:'宏定义组件',
      widgets: HongConfig,
    },
    {
      title: '基础组件',
      widgets: elements,
    },
    {
      title: '高级组件',
      widgets: advancedElements,
    },
    {
      title: '布局组件',
      widgets: layouts,
    },
    // {
    //   title: '模板',
    //   widgets: saves,
    // },
  ];
  
  export const defaultGlobalSettings = {
    type: 'object',
    properties: {
      column: {
        title: '整体布局',
        type: 'string',
        enum: [1, 2, 3],
        enumNames: ['一行一列', '一行二列', '一行三列'],
        'ui:options': {
          placeholder: '默认一行一列',
        },
      },
    //   labelWidth: {
    //     title: '标签宽度',
    //     type: 'number',
    //     'ui:widget': 'slider',
    //     max: 300,
    //     'ui:options': {
    //       hideNumber: true,
    //     },
    //   },
      displayType: {
        title: '标签展示模式',
        type: 'string',
        enum: ['row', 'column'],
        enumNames: ['同行', '单独一行'],
        'ui:widget': 'radio',
      },
    },
  };
  