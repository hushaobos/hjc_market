import React,{PureComponent} from 'react';
import './Store.less';

class StoreItem extends PureComponent{

  render = () =>{
    const  {
      title,
      remark,
      link,
      imgb,
      imgs
    } = this.props;

    return (
      <div className='store-bd'>
        <div className='store-t'>
          <a href={link} target='blank'>
          <span className='store-slogan'>{title}</span>
          <span className='store-remark'>{remark}</span>
          </a>
        </div>
        <div className='store-imgs'>
          <a href={link} target='blank'>
            <div className='store-img-b' >
              <img src={imgb} alt='好店'></img>
            </div>
            <div className='store-img-s'>
              {
                imgs.map(item =>(
                  <div className='store-img-smart'>
                    <img src={item} alt='好店'></img>
                  </div>
                ))
              }
            </div>
          </a>
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
            title='出云亭'
            remark='六年老店，品质保证'
            link=''
            imgb='https://gw.alicdn.com/bao/uploaded/i3/63451248/TB29mETdiGO.eBjSZFpXXb3tFXa_!!63451248.jpg_180x180xz.jpg'
            imgs={[
              'https://gw.alicdn.com/bao/uploaded/i4/63451248/TB2_2RQl25TBuNjSspcXXbnGFXa_!!63451248.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i3/63451248/TB2njp2tXXXXXcjXpXXXXXXXXXX_!!63451248.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i3/63451248/TB29mETdiGO.eBjSZFpXXb3tFXa_!!63451248.jpg_90x90xz.jpg']}>
          </StoreItem>
          <StoreItem
            title='小葵川町屋'
            remark='吃饭是一件幸福的事'
            link=''
            imgb='https://gw.alicdn.com/bao/uploaded/i1/86804191/O1CN01IAA7Ni1gpWTUBS75S_!!0-item_pic.jpg_180x180xz.jpg'
            imgs={[
              'https://gw.alicdn.com/bao/uploaded/i2/86804191/O1CN01ugCg0v1gpWTUBTJwT_!!0-item_pic.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i3/86804191/O1CN01dKWB1x1gpWTQlCvTm_!!0-item_pic.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i3/86804191/O1CN01lNJSKd1gpWTQU1qsK_!!0-item_pic.jpg_90x90xz.jpg']}>
          </StoreItem>
          <StoreItem
            title='谷雨中国礼'
            remark='纳良追求的是一种慢生活的理念'
            link=''
            imgb='https://gw.alicdn.com/bao/uploaded/i1/1305104/O1CN01M3S1bS1nZg3QfwTKp_!!1305104.png_180x180xz.jpg'
            imgs={[
              'https://gw.alicdn.com/bao/uploaded/i4/1305104/O1CN01cZ9HcS1nZg3Qg1dwy_!!1305104.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i3/1305104/O1CN01SZtEjv1nZg3Xorwll_!!1305104.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i1/1305104/O1CN01Kokt1W1nZg3XSPZjP_!!1305104.jpg_90x90xz.jpg']}>
          </StoreItem>
          <StoreItem
            title='上海肥龙搪瓷品'
            link=''
            imgb='https://gw.alicdn.com/bao/uploaded/i4/43623533/TB2e2BUol8lpuFjy0FnXXcZyXXa_!!43623533.jpg_180x180xz.jpg'
            imgs={[
              'https://gw.alicdn.com/bao/uploaded/i2/43623533/TB2_SfaaQfb_uJjSsrbXXb6bVXa_!!43623533.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i1/43623533/TB2vBV5bBDH8KJjSszcXXbDTFXa_!!43623533.jpg_90x90xz.jpg',
              'https://gw.alicdn.com/bao/uploaded/i4/43623533/TB2e2BUol8lpuFjy0FnXXcZyXXa_!!43623533.jpg_90x90xz.jpg']}>
          </StoreItem>
        </div>
      </div>
    );
  }
}

export default Store;