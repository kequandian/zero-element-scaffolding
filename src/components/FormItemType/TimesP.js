import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/zh-cn';
import moment from 'moment';
moment.locale('zh-cn');
const { TimePicker } = DatePicker;

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 1,
      // time: '',
      // startTime: new Date(+new Date() + 8 * 3600 * 1000).toISOString().split("T")[1].split(".")[0]//获取当前时间
      startTime: '00:12:13'
    };
    this.myRef = React.createRef();

  }

  timeChange = (time, timeString) => {
    this.setState({
      time: timeString
    })
  };
  //限制小时显示
  disabledHours = () => {
    let hours = [];
    let time = this.state.startTime;
    // let time=new Date(+new Date() +8*3600*1000).toISOString().split("T")[1].split(".")[0];
    // this.setState({startTime:time},()=>{console.log("11")});
    let timeArr = time.split(":");
    for (var i = 0; i < parseInt(timeArr[0]); i++) {
      hours.push(i)
    }
    console.log('hours = ', hours)
    return [17,18,19,20,21,22,23];
  };
  //限制分钟
  disabledMinutes = (selectedHour) => {
    let { startTime } = this.state;
    let timeArr = startTime.split(":");
    let minutes = [];
    if (selectedHour == parseInt(timeArr[0])) {
      for (let i = 0; i < parseInt(timeArr[1]); i++) {
        minutes.push(i);
      }
    }
    return minutes;
  };
  //限制秒
  disabledSeconds = (selectedHour, selectedMinute) => {
    let { startTime } = this.state;
    let timeArr = startTime.split(':');
    let second = [];
    if (selectedHour == parseInt(timeArr[0]) && selectedMinute == parseInt(timeArr[1])) {
      for (var i = 0; i <= parseInt(timeArr[2]); i++) {
        second.push(i)
      }
    }
    return second;
  };

  render() {
    console.log(new Date(+new Date() + 8 * 3600 * 1000).toISOString().split("T")[1].split(".")[0])
    return (
      <div>
        <TimePicker
          disabledHours={this.disabledHours}
          disabledMinutes={this.disabledMinutes}
          disabledSeconds={this.disabledSeconds}
          value={
            this.state.time ? moment(this.state.startTime, "HH:mm:ss") : moment()
          }
          onchange={this.timeChange}
          format="HH:mm:ss"
        />

      </div>
    )
  }
}
export default FormItem;