import React,{PureComponent} from 'react';
import './SidebarNav.less';
import SidebarNavItem from './SidebarNavItem';

class SidebarNav extends PureComponent{
  render(){
    const guideMenu = [
      {
        column_item:{
          label: '餐桌',
          link: 'http://localhost:3000/'
        },
        items:[
          {
            label: '红木',
            link: 'http://localhost:3000/'
          },
          {
            label: '檀木',
            link: 'http://localhost:3000/'
          }
        ]
      }
    ];
    
    return (
      <ul className='guide-bd'>
        <SidebarNavItem menus={guideMenu}></SidebarNavItem>
      </ul>
    );
  }
}

export default SidebarNav;