import React,{PureComponent} from 'react';
import './Logo.less'

class Logo extends PureComponent{
  render(){
    return (
    <div className="logo">
	    <img src={'https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/home/logo/logo.png'}/>
    </div>);
  }
}
export default Logo;