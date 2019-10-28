import React,{PureComponent} from 'react';
import FurnitureComb from './FurnitureComb';
import FloorPlan from './FloorPlan';
import './Collocation.less';

class Collocation extends PureComponent{
  render = () => {
    return (
    <div className='collocation-bd'>
      <FurnitureComb></FurnitureComb>
      <FloorPlan></FloorPlan>
    </div>
    );
  }
}

export default Collocation;