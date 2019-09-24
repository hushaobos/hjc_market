import React,{PureComponent} from 'react';
import './TitleNav.less';

class TitleNav extends PureComponent{
  state = {
    navs:[
      {
        title:'装修报价',
        link:''
      },
      {
        title:'户型方案',
        link:''
      },
      {
        title:'小窝社区',
        link:''
      },
      {
        title:'窝立方',
        link:'http://www.wlf360.com'
      }
    ]
  };

  render = () =>{
    const {navs} = this.state;
    return (
      <div className='titles-nav'>
        <h2 className='g-title'>家居导购</h2>
        <ul className='wlf-nav'>
          {
            navs.map((value,index) => (
              <li key={index}>
                <a  target='blank' href={value.link}>{value.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TitleNav;