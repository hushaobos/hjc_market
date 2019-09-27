import React,{PureComponent} from 'react';

// 倒计时组件
class TimeCountDown extends PureComponent {
  state = {
    day: 10,
    hour: 10,
    minute: 10,
    second: 10,
    delayTime: 0,
    stage: 0
  }

  componentDidMount() {
    this.startCountDown();
  }

  componentDidUpdate() {
    const {
      endCountdown
    } = this.props;

    endCountdown(this.isStartSpike());//判断是否大于等于预定时间
  }

  timer = null;

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  // 开启计时
  startCountDown() {
    const {delayTime} = this.state;

    if (delayTime && !this.timer) {
      this.timer = setInterval(() => {
        this.doCount();
      }, 1000);
    }
  }

  resetTime = () =>{
    this.setState({
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    });
  }

  doCount() {
    const {
      delayTime,
      stage
    } = this.state;

    const {
      onTimeout,
    } = this.props;

    // 使用Math.floor((delayTime - Date.now()) / 1000)的话会导致这里值为0，前面delayTime - Date.now() > 0
    const timeDiffSecond = (delayTime - `${Date.now()}`.replace(/\d{3}$/, '000')) / 1000;

    if (timeDiffSecond <= 0) {
      if(stage === 0)
      {
        this.setState({
          delayTime: this.props.endTime,
          stage: 1
        });
        return;
      }
      else{
        this.resetTime();
        this.clearTimer();
        if (typeof onTimeout === 'function') {
          onTimeout();
        }
        return;
      }
    }

    const day = Math.floor(timeDiffSecond / 86400);
    const hour = Math.floor((timeDiffSecond % 86400) / 3600);
    const minute = Math.floor((timeDiffSecond % 3600) / 60);
    const second = Math.floor((timeDiffSecond % 3600) % 60);

    this.setState({
      day,
      hour,
      minute,
      second
    });
  }

  isStartSpike = () =>
  {
    const {stage} = this.state;
    const {
      day,
      hour,
      minute,
      second
    } = this.state;
    const surplusTime = day + hour + minute + second;
    return stage === 1 || !surplusTime;
  }

  render() {
    const {
      countDownRender,
      startTime,
      endTime
    } = this.props;

    const {
      stage
    } = this.state;

    this.state.delayTime = stage === 0 ? startTime : endTime;

    return countDownRender({
      ...this.state,
    });
  }
}

export default TimeCountDown;