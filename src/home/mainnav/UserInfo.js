import React,{PureComponent} from 'react';
import './UserInfo.less';

class Tourist extends PureComponent{
  render = () => {
    return (
    <div className='tourist'>
      <div className='tourist-title'>
        <span>hi，游客你好</span>
      </div>
      <div className='u-logout'>
        <a  target='blank' href=''>登录</a>
        <a  target='blank' href=''>注册</a>
      </div>
    </div>
    );
  }
}

class User extends PureComponent{
  render = () => {
    return (
      <div className='l-user'>
        <div className='l-user-title'>
          <span>欢迎，忆藏枫{sessionStorage.w_nk}</span>
        </div>
        <div className='l-user-goods-st'>
          <ul>
            <li key='good-st-1'>
              <strong>0</strong>
              <a  target='blank' href=''>待收货</a>
            </li>
            <li key='good-st-2'>
              <strong>0</strong>
              <a  target='blank' href=''>待发货</a>
            </li>
            <li key='good-st-3'>
              <strong>0</strong>
              <a  target='blank' href=''>待付款</a>
            </li>
            <li key='good-st-4'>
              <strong>0</strong>
              <a  target='blank' href=''>待评价</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class UserInfo extends PureComponent{
  render = () => {
    
    return (
      <div className='w-user'>
        {
          sessionStorage.w_nk === undefined ? <Tourist></Tourist> : <User></User>
        }
      </div>
    );
  }
}

export default UserInfo;