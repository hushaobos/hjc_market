import React,{PureComponent} from 'react';
import './PanicBuy.less';
import CallTimer from '../../utils/CallTimer';

class SpikeGoodLoaded extends PureComponent{
  render = () => {
    const {price,img,time,link} = this.props;
    return (
      <div className='spike-good'>
        <a href={link} target='blank'>
          <div className='spike-good-pic'>
            <img src={img} alt='抢购商品'></img>
          </div>
          <div className='spike-good-price'>
            <strong>{price}</strong>
          </div>
          <div className='spike-good-buy'>
            <CallTimer className='spike-time' time={time}></CallTimer>
            <span className='spike-buy-btn'>马上抢购</span>
          </div>
        </a>
      </div>
    );
  }
}

class PanicBuy extends PureComponent{
  render = () =>{
    return (
      <div className='spike'>
        <div className='spike-bd'>
          <div className='spike-title'>
            <h2>限时抢购</h2>
            <a href='' target='blank'>更多</a>
          </div>
          <div className='spike-goods'>
            <SpikeGoodLoaded
              link=''
              img='http://img4.imgtn.bdimg.com/it/u=2099871983,1940515709&fm=26&gp=0.jpg'
              price={'$12'}
              time={1569859200000}
            ></SpikeGoodLoaded>
            <SpikeGoodLoaded
              link=''
              img='http://img5.imgtn.bdimg.com/it/u=2450831580,152364857&fm=26&gp=0.jpg'
              price={'$32'}
              time={1569945600000}
            ></SpikeGoodLoaded><SpikeGoodLoaded
            link=''
            img='http://img0.imgtn.bdimg.com/it/u=2584226902,3771496110&fm=26&gp=0.jpg'
            price={'$43'}
            time={1570032000000}
          ></SpikeGoodLoaded><SpikeGoodLoaded
          link=''
          img='http://img3.imgtn.bdimg.com/it/u=1796782238,2648122031&fm=26&gp=0.jpg'
          price={'$19'}
          time={1570118400000}
        ></SpikeGoodLoaded>
          </div>
        </div>
      </div>
    );
  }
}

export default PanicBuy;