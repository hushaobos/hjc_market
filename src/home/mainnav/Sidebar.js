import React,{PureComponent} from 'react';
import './Sidebar.less';
import SidebarNav from './SidebarNav';

class Sidebar extends PureComponent{
  render(){
    return (
    <div className='sidebar'>
      <SidebarNav></SidebarNav>
    </div>
    );
  }
}
export default Sidebar;