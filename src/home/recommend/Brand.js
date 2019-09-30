import React,{PureComponent} from 'react';
import './Brand.less';

class BrandItem extends PureComponent{

  render = () =>{
    const  {
      title,
      remark,
      link,
      imgb,
      imgs
    } = this.props;

    return (
      <div className='brand-bd'>
        <div className='brand-t'>
          <a href={link} target='blank'>
          <span className='brand-slogan'>{title}</span>
          <span className='brand-remark'>{remark}</span>
          </a>
        </div>
        <div className='brand-imgs'>
          <a href={link} target='blank'>
            <div className='brand-img-b' >
              <img src={imgb} alt='好店'></img>
            </div>
            <div className='brand-img-s'>
              {
                imgs.map(item =>(
                  <div className='brand-img-smart'>
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

class Brand extends PureComponent{
  render = () =>{
    return (
      <div className='brands'>
        <div className='brands-head'>
          <h2>品牌推荐</h2>
          <a href='' target='blank'>更多</a>
        </div>
        <div className='brands-p'>
          <BrandItem
            title='eqweqw'
            remark='ewq'
            link=''
            imgb='https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp'
            imgs={['https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp','https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp','https://preview.qiantucdn.com/58pic/35/23/71/73g58PIC18fead4fpCf8t_PIC2018.jpg!qt324new_nowater_webp']}></BrandItem>
            </div>
      </div>
    );
  }
}

export default Brand;