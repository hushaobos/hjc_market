import React,{PureComponent} from 'react';
import Store from './Store';
import './Recommend.less';

class Recommend extends PureComponent{
  render = () =>{
    return (
      <div className='recommends'>
        <Store></Store>
      </div>
    );
  }
}

export default Recommend;