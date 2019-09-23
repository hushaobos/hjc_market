import React,{PureComponent} from 'react';
import ReactSwiper from 'reactjs-swiper';
import './Advert.less';

class Advert extends PureComponent{
  state = {
    items:[{
      image: 'https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/home/main/advert/20190515091243.jpg',
      title: '我的世界,我的家',
      link: 'http://www.louvre-group.cn/'
    }, {
      image: 'https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/home/main/advert/20190918184934.jpg',
      title: '设计艺术年度论坛',
      link: 'http://www.louvre.cn/gzyishu/#gongsheng'
    }, {
      image: 'https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/home/main/advert/20190918190147.jpg',
      title: '十一享购盛典',
      link: 'http://louvre.cn/2019100101/'
    }, {
      image: 'https://hjc718-test.oss-cn-shenzhen.aliyuncs.com/home/main/advert/20190918191526.jpg',
      title: '向艺而生',
      link: 'http://www.louvre.cn/gzyishu/'
    }]
  };
  
  render(){
    const {items} = this.state;
  
    const swiperOptions = {
      preloadImages: true,
      autoplay: 4000,
      autoplayDisableOnInteraction: false
    };

    return (
      <div className="advert-bd">
        <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                   className="swiper-example advert" />
      </div>
    );
  }
}

export default Advert;