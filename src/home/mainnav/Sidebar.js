import React,{PureComponent} from 'react';
import './Sidebar.less';
import SidebarNav from './SidebarNav';

class Sidebar extends PureComponent{
  render(){
    return (
    <div className='sidebar'>
      <h2>家居导购</h2>
      <SidebarNav></SidebarNav>
    </div>
    );
  }
}
export default Sidebar;