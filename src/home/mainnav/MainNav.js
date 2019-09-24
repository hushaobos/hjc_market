import React,{PureComponent} from 'react';
import './MainNav.less';
import Sidebar from './Sidebar';
import Advert from './Advert';
import WebInfo from './WebInfo';

class MainNav extends PureComponent{
  render(){
    return (
    <div className="sa-main">
      <Sidebar/>
      <Advert></Advert>
      <WebInfo></WebInfo>
    </div>
    );
  }
}
export default MainNav;