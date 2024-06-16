// 未使用控件
// 右键下拉选择时间
import Now from './Times/now'
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

// 部门名称
import GetDepName from './User/getDepName'
// 用户角色
import Getrole from './User/getrole'
// 用户职位
import Getposition from './User/getposition'
// 用户部门主管
import GetHeadOfDep from './User/getHeadOfDep'
// 分公司名称
import GetBraOffice from './User/getBraOffice'
// 表单名称+编号
import FormNaN from './form/formNaN'
import ProcessStart from './form/processStart'
import SerialNumber from './form/serialNumber'
import StepHandler from "./form/stepHandler";

// 时间宏定义控件
// 获取当前时间(年月日 时分秒)

// 年月日时分秒
import NowAll from './Times/nowAll'
// 获取现在时间(年份)
import NowYear from './Times/nowYear'
// 获取现在时间(月份)
import NowMonth from './Times/nowMonth'
// 获取现在时间(日期)
import NowDay from './Times/nowDay'
// 获取现在时间(时)
import NowHour from './Times/nowHour'
// 获取现在时间(分)
import NowMin from './Times/nowMin'
// 获取现在时间(秒)
import NowSecond from './Times/nowSecond'
// 获取现在时间(年月日)
import NowDays from './Times/nowDays'
// 获取现在时间(时分秒)
import NowTimes from './Times/nowTimes'


// 样式文件
import './public/index.less'
export const widgets = {
    // 未使用
    Now,
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
    GetDepName,
    Getrole,
    Getposition,
    GetHeadOfDep,
    GetBraOffice,
    FormNaN,
    ProcessStart,
    SerialNumber,
    StepHandler,
    
    // 时间组
    NowAll,
    NowYear,
    NowMonth,
    NowDay,
    NowHour,
    NowMin,
    NowSecond,
    NowDays,
    NowTimes,
}