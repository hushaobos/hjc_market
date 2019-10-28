import React,{PureComponent} from 'react';
import Item from '../fragments/Item';
import './LikeCommodity.less';

class LikeCommodity extends PureComponent{
  render = () => {
    return (
      <div className='like-sells'>
        <div className='like-hd'>
          <h2>家装推荐</h2>
          <a href=''>更多</a>
        </div>
        <div className='like-items'>
          <ul className='like-items-bd'>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
            <li className='like-item'>
              <Item></Item>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LikeCommodity;