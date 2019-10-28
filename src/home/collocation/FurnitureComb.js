import React,{PureComponent} from 'react';
import './FurnitureComb.less';

class FurnitureCombItem extends PureComponent{
  render = () => {
    return (
      <div className='fc-item'>
        <a href='http://localhost:3000/' target='blank'>
          <div className='fc-hd'>
            <h4 className='fc-item-title'>
              <span className='title'>家具组合</span>
            </h4>
            <p className='fc-bewrite'>方便快捷的组合</p>
          </div>
          <div className='fc-item-details'>
            <img class='fc-item-pic' src='http://www.donglianxuan.com/upload/20170307/201703071240131488861613.jpg'></img>
            <div className='fc-price'>
              <strong>￥2500</strong>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

class FurnitureComb extends PureComponent{
  state = {

  }
  
  render = () => {
    return (
      <div className='furniture-compose'>
        <div className='fc-title'>
          <h2>家具套组</h2>
          <a href=''>更多</a>
        </div>
        <div className='fc-items'>
          <FurnitureCombItem></FurnitureCombItem>
          <FurnitureCombItem></FurnitureCombItem>
          <FurnitureCombItem></FurnitureCombItem>
        </div>
      </div>
    );
  }
}

export default FurnitureComb;