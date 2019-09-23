import React,{PureComponent} from 'react';
import './MainNav.less';
import Sidebar from './Sidebar';
import Advert from './Advert';

class MainNav extends PureComponent{
  render(){
    return (
    <div className="sa-main">
      <Sidebar/>
      <Advert></Advert>
    </div>
    );
  }
}
export default MainNav;