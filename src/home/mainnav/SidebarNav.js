import React,{PureComponent} from 'react';
import './SidebarNav.less';
import SidebarNavItem from './SidebarNavItem';

class SidebarNav extends PureComponent{
  render(){
    const guideMenu = [
      {
        column_item:{
          label: '沙发',
          link: 'http://localhost:3000/'
        },
        items:[
          {
            label: '单人沙发',
            link: 'http://localhost:3000/'
          },
          {
            label: '双人沙发',
            link: 'http://localhost:3000/'
          },
          {
            label: '三人沙发',
            link: 'http://localhost:3000/'
          },
          {
            label: '四人沙发',
            link: 'http://localhost:3000/'
          },
          {
            label: '组合沙发',
            link: 'http://localhost:3000/'
          },
          {
            label: '沙发床',
            link: 'http://localhost:3000/'
          },
        ]
      },
      {
        column_item:{
          label: '椅子',
          link: 'http://localhost:3000/'
        },
        items:[
          {
            label: '休闲椅',
            link: 'http://localhost:3000/'
          },
          {
            label: '办公椅',
            link: 'http://localhost:3000/'
          },
          {
            label: '餐椅',
            link: 'http://localhost:3000/'
          }
        ]
      },
      {
        column_item:{
          label: '桌台',
          link: 'http://localhost:3000/'
        },
        items:[
          {
            label: '梳妆台',
            link: 'http://localhost:3000/'
          },
          {
            label: '梳妆台',
            link: 'http://localhost:3000/'
          },
          {
            label: '写字台',
            link: 'http://localhost:3000/'
          },
          {
            label: '办公台',
            link: 'http://localhost:3000/'
          },
          {
            label: '工作台',
            link: 'http://localhost:3000/'
          },
          {
            label: '会议桌',
            link: 'http://localhost:3000/'
          },
          {
            label: '电脑台',
            link: 'http://localhost:3000/'
          },
          {
            label: '餐台(桌)',
            link: 'http://localhost:3000/'
          }
        ]
      }
      ,{
        column_item:{
          label: '几架',
          link: 'http://localhost:3000/'
        },
        items:[
          {
            label: '茶几',
            link: 'http://localhost:3000/'
          },
          {
            label: '条几',
            link: 'http://localhost:3000/'
          },
          {
            label: '炕几',
            link: 'http://localhost:3000/'
          }
        ]
      },
      {
        column_item:{
          label:'床',
          link: 'http://localhost:3000/'
        },
        items:[
          {
            label: '单人床',
            link: 'http://localhost:3000/'
          },
          {
            label: '双人床',
            link: 'http://localhost:3000/'
          },
          {
            label: '折叠床',
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