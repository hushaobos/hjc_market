import React,{PureComponent} from 'react';
import './Store.less';

class StoreItem extends PureComponent{

  render = () =>{
    const  {
      title,
      link,
      imgb,
      imgs
    } = this.props;

    return (
      <div className='store-bd'>
        <div className='store-t'>
          <a href={link} target='blank'>{title}</a>
        </div>
        <div className='store-imgs'>
          <img className='img-b' src={imgb} alt='好店'></img>
          <div className='img-s'>
            <ul>
              {
                imgs.map(item =>(
                  <li>
                    <img src={item} alt='好店'></img>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class Store extends PureComponent{
  render = () =>{
    return (
      <div className='stores'>
        <div className='stores-head'>
          <h2>好店推荐</h2>
          <a href='' target='blank'>更多</a>
        </div>
        <div className='stores-p'>
          <StoreItem
          
            imgs={['','','']}></StoreItem>
        </div>
      </div>
    );
  }
}

export default Store;