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
    const {
      startTime,
      endTime,
      className,
      endCountdown
    } = this.props;

    // 传递render函数
    return (
      <span className={className}>
        <TimeCountDown
          startTime={startTime}
          endTime={endTime}
          onTimeout={() => { this.onTimeout(); }}
          endCountdown={endCountdown}
          countDownRender={({day , hour, minute, second ,stage}) => {
            return (
              <span>
                {stage === 0 ? '距离开始 ' : '剩余时间 '}
                {day}天{formateTimeStr(hour)}:{formateTimeStr(minute)}:{formateTimeStr(second)}
              </span>
            );
          }}
        />
      </span>
    )
  }
}

export default CallTimer;