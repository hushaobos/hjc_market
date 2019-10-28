import React,{PureComponent} from 'react';
import Item from '../fragments/Item';
import './HotSell.less';

class HotSell extends PureComponent{
  render = () => {
    return (
      <div className='hot-sells'>
        <div className='hot-hd'>
          <h2>热卖单品</h2>
          <a href=''>更多</a>
        </div>
        <div className='hot-items'>
          <ul className='hot-items-bd'>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
            <li className='hot-item'>
              <Item></Item>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HotSell;