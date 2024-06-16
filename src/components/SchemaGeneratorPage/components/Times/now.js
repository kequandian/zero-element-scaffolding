import React,{useState} from 'react'
import { Dropdown,Menu,Button } from "antd";
// 获取年份
import NowYear from './nowYear'
// 获取月份
import NowMonth from './nowMonth'
// 获取今天
import NowDay from './nowDay'
// 获取时
import NowHour from './nowHour'
// 获取分
import NowMin from './nowMin'
// 获取秒
import NowSecond from './nowSecond'
// 获取年月日
import NowDays from './nowDays'
// 获取时分秒
import NowTimes from './nowTimes'
// 获取所有时间
import NowAll from './nowAll'
export default function () {
    const [View,SetView] = useState(<h1>右键选择实时格式</h1>)
    const [disable,setDisable] = useState(false)
    function SetTimeView(e){
        if(e.key === "1"){
            console.log(e);
            SetView(<NowAll/>)
        }else if(e.key === "2"){
            SetView(<NowYear/>)
        }else if(e.key === "3"){
            SetView(<NowMonth/>)
        }else if(e.key === "4"){
            SetView(<NowDay/>)
        }else if(e.key === "5"){
            SetView(<NowHour/>)
        }else if(e.key === "6"){
            SetView(<NowMin/>)
        }else if(e.key === "7"){
            SetView(<NowSecond/>)
        }else if(e.key === "8"){
            SetView(<NowDays/>)
        }else if(e.key === "9"){
            SetView(<NowTimes/>)
        }else{
            console.log("err!")
        }
        setDisable(true)
        return View;
    }
    const [visible,setVisible] = useState(false)
    const menu = (
        <Menu onClick={SetTimeView}>
        <Menu.Item key="1">现在时间</Menu.Item>
        <Menu.Item key="2">获取现在时间(年份)</Menu.Item>
        <Menu.Item key="3">获取现在时间(月份)</Menu.Item>
        <Menu.Item key="4">获取现在时间(日期)</Menu.Item>
        <Menu.Item key="5">获取现在时间(时)</Menu.Item>
        <Menu.Item key="6">获取现在时间(分)</Menu.Item>
        <Menu.Item key="7">获取现在时间(秒)</Menu.Item>
        <Menu.Item key="8">获取现在时间(年月日)</Menu.Item>
        <Menu.Item key="9">获取现在时间(时分秒)</Menu.Item>
      </Menu>
    )
    function handleVisibleChange(flag){
        setVisible(flag)
        return visible;
      }
    return <Dropdown
    overlay={menu}
    onVisibleChange={handleVisibleChange}
    visible={visible}
    arrow
    trigger={['contextMenu']}
    >
        <div>{View}</div>
    </Dropdown>
}