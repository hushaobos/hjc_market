import React,{PureComponent} from 'react';
import './FloorPlan.less';

class FloorPlanItem extends PureComponent{
  render = () => {
    const {img,title,remark,designer,link} = this.props;
    return (
      <div className='floor-item'>
        <a href={link} target='blank'>
          <div className='floor-item-pic-b'>
            <img src={img}></img>
          </div>
          <div className='floor-item-copywriting'>
            <h4 className='copywriting-title'>
              <span>{title}</span>
            </h4>
            <p className='copywriting-content'>{remark}</p>
            <span className='copywriting-design'>{designer}</span>
          </div>
        </a>
      </div>
    );
  }
}

class FloorPlan extends PureComponent{
  render = () => {
    return (
      <div className='floors'>
        <div className='floors-hd'>
          <h2>户型搭配</h2>
          <a href='http://localhost:3000/'>更多</a>
        </div>
        <div className='floors-list'>
          <FloorPlanItem
            link='http://47.93.97.206/business/queryPresetPlan'
            img='https://cdn.dodojia.cn/screenshots%2Fpresetplan_2018-05-09_10%3A11%3A14%3A313_nhttz.jpg?x-oss-process=style/product-normal'
            title='北欧混搭'
            remark='炎炎夏日，舟车劳顿的通勤最让人烦心。深邃如海的蔚蓝色营造宁静舒爽的氛围，瞬间浇灭大汗淋漓的燥热；让人沉浸于创意的海洋里遨游。'
            designer='Designer：慕颐'
          ></FloorPlanItem>
        </div>
      </div>
    );
  }
}

export default FloorPlan;