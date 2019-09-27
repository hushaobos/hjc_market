import React,{PureComponent} from 'react';
import './PanicBuy.less';
import CallTimer from '../../utils/CallTimer';

class SpikeGoodLoaded extends PureComponent{
  state = {
    linkTitle: '预约抢购',
    btnStyle: 'spike-appointment-btn'
  }

  endCountdown = (isEnd) =>{
    const linkTitle = isEnd ? '马上抢购' : '预约抢购';
    const btnStyle = isEnd ? 'spike-buy-btn' : 'spike-appointment-btn';
    this.setState({
      linkTitle: linkTitle,
      btnStyle: btnStyle
    });
  }

  render = () => {
    const {
      price,
      img,
      startTime,
      endTime,
      link} = this.props;

    const {
      linkTitle,
      btnStyle
    } = this.state;

    const timeParam = {
      endCountdown: this.endCountdown,
      startTime: startTime,
      endTime: endTime
    };

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
            <CallTimer className='spike-time'
              {...timeParam}
            ></CallTimer>
            <span className={btnStyle}>{linkTitle}</span>
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
              img='https://img.51miz.com/Element/00/76/30/63/91ee46b5_E763063_00487d2a.png!/quality/90/unsharp/true/compress/true/format/png'
              price={'$12'}
              startTime={1562859200000}
              endTime={1569945600000}
            ></SpikeGoodLoaded>
            <SpikeGoodLoaded
              link=''
              img='https://img.51miz.com/preview/element/00/01/09/29/E-1092998-1A430231.jpg!/quality/90/unsharp/true/compress/true/format/jpg'
              price={'$32'}
              startTime={1569945600000}
              endTime={1569949600000}
            ></SpikeGoodLoaded><SpikeGoodLoaded
            link=''
            img='https://img.51miz.com/preview/element/00/01/08/65/E-1086525-E60F03F9.jpg!/quality/90/unsharp/true/compress/true/format/jpg'
            price={'$43'}
            startTime={1570032000000}
            endTime={1570132000000}
          ></SpikeGoodLoaded><SpikeGoodLoaded
          link=''
          img='https://img.51miz.com/preview/element/00/01/08/65/E-1086516-5B011AD2.jpg!/quality/90/unsharp/true/compress/true/format/jpg'
          price={'$19'}
          startTime={1570118400000}
          endTime={1570158400000}
        ></SpikeGoodLoaded>
          </div>
        </div>
      </div>
    );
  }
}

export default PanicBuy;