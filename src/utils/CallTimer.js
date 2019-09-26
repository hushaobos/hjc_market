import React,{Component} from 'react';
import TimeCountDown from './TimeCountDown';
function formateTimeStr(num) {
  return num < 10 ? `0${num}` : num;
}
// 业务调用倒计时组件
class CallTimer extends Component {
  onTimeout = () => {
    this.forceUpdate();
  }
  render() {
    const {time,className} = this.props;
    // 传递render函数
    return (
      <span className={className}>
        剩余时间
        <TimeCountDown
            time={time}
            onTimeout={() => { this.onTimeout(); }}

            render={({day , hour, minute, second }) => {
              return (
                <span>
                  {day}天 {formateTimeStr(hour)}:{formateTimeStr(minute)}:{formateTimeStr(second)}
                </span>
              );
            }}
          />
      </span>
    )
  }
}

export default CallTimer;