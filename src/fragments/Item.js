import React,{PureComponent} from 'react';
import './Item.less';

class Item extends PureComponent{
  render = () =>{
    return (
      <div className='item'>
        <div className='item-pic-b'>
          <a className='item-pic-l'>
            <img className='item-pic' src='https://gma.alicdn.com/bao/uploaded/i3/45496135/O1CN01iZfVsF1vBsMfpMRTR_!!0-saturn_solar.jpg_200x200.jpg_.webp'></img>
          </a>
        </div>
        <div className='item-i-1'>
          <a className='item-i-title'>
            <em className='shipping'>包邮</em>
            蜂屯蚁附让他一人同意让他一人和哦哦
          </a>
        </div>
        <div className='item-i-2'>
          <a className='item-comment'>
            <span>评价 </span>
            <em>12</em>
          </a>
          <a className='item-collect'>
            <span> 收藏 </span>
            <em>651</em>
          </a>
        </div>
        <div className='item-i-3'>
          <div className='item-price'>
            <a className='item-discount-price'>
              <span>￥</span>
              <em>116</em>
            </a>
            <a className='item-original-price'>
              <span>￥</span>
              <em>176</em>
            </a>
          </div>
          <div className='item-sales-volume'>
            <a>
              <span>月销</span>
              <em>52</em>
              <span>笔</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;