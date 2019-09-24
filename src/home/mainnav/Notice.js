import React,{PureComponent} from 'react';
import './Notice.less';

class Notice extends PureComponent{
  render = () =>{
    return(
      <div className='m-new-bd'>
        <div className='new-titles'>
          <ul>
            <li><a target='blank' href=''>公告</a></li>
          </ul>
        </div>
        <div className='new-bd'>
          <ul>
            <li>
              <a target='blank' href=''>2019.9.24 窝立方版本更新</a>
            </li>
          </ul>
        </div>
        <div className='new-floot'>
          <a href=''>更多>></a>
        </div>
      </div>
    );
  }
}

export default Notice;