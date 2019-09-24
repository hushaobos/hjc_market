import React,{PureComponent} from 'react';
import './GuideItem.less';

class GuideItem extends PureComponent{

  render(){
    const {menu} = this.props;
    return (
      menu.guides.map((value,index) =>(
        <a  target='blank' key={index} className={menu.parent ? 'p-guide-i' : 'c-guide-i'} href={value.link}>{value.label}</a>
        ))
    );
  }
}

export default GuideItem;