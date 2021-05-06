// 未使用控件
// 提示控件
import PlaceHolder from "./Others/placeholder"
// 已使用控件
// 日历控件
import CalendarCom from './Others/calendar';
// 链接控件
import Url from './Others/url'
// 签章控件
import Elesign from "./Others/elesign";
// 树控件
// 文件树控件
import TreeDir from './Tree/tree'
// 选择树控件
import TreeSelect from './Tree/treeSelect'

// 获取子表单控件
import GetList from './Others/getlist'

// 宏定义控件
// 用户名获取
import GetUserName from "./User/getUserName"
// 时间宏定义控件
// 获取当前时间(年月日 时分秒)
import Now from './Times/now'

// 样式文件
import './public/index.less'
export const widgets = {
    // 未使用
    // Others
    PlaceHolder,
    //已使用 
    // Others
    CalendarCom,
    Url,
    Elesign,
    GetList,
    // 树组
    TreeDir,
    TreeSelect,
    // 宏组
    GetUserName,
    // 时间组 
    Now,

}