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
            title='罗浮宫'
            remark='中泰 派格 丰成帝纳'
            link=''
            imgb='http://www.louvre-group.cn/chanpin/201901/2FA12/1.jpg'
            imgs={['http://www.louvre-group.cn/chanpin/201901/2FA12/2.jpg',
            'http://www.louvre-group.cn/chanpin/201901/2FA07/1.jpg',
            'http://www.louvre-group.cn/news/20180519/14.jpg']}>
          </BrandItem>
          <BrandItem
            title='皇朝家私'
            remark='不忘初心，悦享优质生活'
            link=''
            imgb='https://www.hkroyal.com/Upload/201907/5d27e75d53979.jpg'
            imgs={['https://www.hkroyal.com/Upload/201907/5d3663251c42e.jpg',
            'https://www.hkroyal.com/Upload/201907/5d36bc90c77a2.JPG',
            'https://www.hkroyal.com/Upload/201908/5d4aa41f3d07f.jpg']}>
          </BrandItem>
          <BrandItem
            title='顺联家具城'
            link=''
            imgb='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=a8336aab304e251fe6f7e3fa9787c9c2/e7cd7b899e510fb3e623bf06d933c895d1430c6d.jpg'
            imgs={['http://www.slsouth.com/themes/sunlink_north/public/assets/slnorth/images/8.jpg',
            'http://www.slsouth.com/themes/sunlink_north/public/assets/slnorth/images/7.jpg',
            'http://www.slsouth.com/themes/sunlink_north/public/assets/slnorth/images/9.jpg']}>
          </BrandItem>
          <BrandItem
            title='红星美凯龙'
            remark='美好的生活需要沙发和床'
            link=''
            imgb='https://www.chinaredstar.com/images/index/img_shuicao.png'
            imgs={['https://www.chinaredstar.com/images/design/img_canzhuo.png',
            'https://www.chinaredstar.com/images/design/img_dieluohancopy5.png',
            'https://www.chinaredstar.com/images/design/img_tiane1.png']}>
          </BrandItem>
        </div>
      </div>
    );
  }
}

export default Brand;