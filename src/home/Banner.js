import React,{PureComponent} from 'react';
import './Banner.less';


class HomeBanner extends PureComponent{
  render(){
    return (
      <div className='banner'>
        <img alt='广告' src={'https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/home/banner/banner_wlf.png'}/>
      </div>
    );
  }
}
export default HomeBanner;