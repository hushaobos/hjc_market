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
            title='eqweqw'
            remark='ewq'
            link=''
            imgb='https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp'
            imgs={['https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp','https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp','https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp']}></StoreItem>
          </div>
      </div>
    );
  }
}

export default Store;