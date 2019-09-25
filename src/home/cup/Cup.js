import React,{PureComponent} from 'react';
import Logo from './Logo';
import HomeSearch from './Search';
import './Cup.less';
import QRcode from './QRcode';

class Cup extends PureComponent{
  render(){
    return (
      <div className='b-cup'>
        <div className='top'>
          <Logo></Logo>
          <HomeSearch></HomeSearch>
          <QRcode></QRcode>
        </div>
      </div>);
  }
}
export default Cup;