import React,{PureComponent} from 'react';
import './WebInfo.less';
import UserInfo from './UserInfo';
import Notice from './Notice';

class WebInfo extends PureComponent{
  render = () =>{
    return (
      <div className="main-right">
        <UserInfo></UserInfo>
        <Notice></Notice>
      </div>
    );
  }
}

export default WebInfo;