import React,{PureComponent} from 'react';
import Store from './Store';
import Brand from './Brand';
import './Recommend.less';

class Recommend extends PureComponent{
  render = () =>{
    return (
      <div className='recommends'>
        <Store></Store>
        <Brand></Brand>
      </div>
    );
  }
}

export default Recommend;