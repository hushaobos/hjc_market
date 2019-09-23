import React,{PureComponent} from 'react';
import './MainNav.less';
import Sidebar from './Sidebar';

class MainNav extends PureComponent{
  render(){
    return (
    <div class="sa-main">
      <Sidebar/>
    </div>
    );
  }
}
export default MainNav;