import React,{PureComponent} from 'react';
import Store from './Store';
import Brand from './Brand';
import './Recommend.less';

class Recommend extends PureComponent{
  render = () =>{
    return (
      <div className='recommends'>
        <Brand></Brand>
        <Store></Store>
      </div>
    );
  }
}

export default Recommend;