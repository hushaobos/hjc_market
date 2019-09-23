import React,{PureComponent,Fragment} from 'react';
import './SidebarNavItem.less';
import GuideItem from './GuideItem';

class SidebarNavItem extends PureComponent{

  state = {
    guideLi: []
  }

  componentWillMount()
  {
    const {menus} = this.props;

    this.setState({
      guideLi: this.parseTitle(menus,[])//设置导购菜单栏每一栏数据
    });
  }

  parseTitle = (menus,list) =>{
    if(!!menus)
    menus.forEach(val => {
      list.push({guides:[val.column_item],parent: true});
      list = list.concat(this.parseGuideItem(val.items));
    });
    return list;
  }

  parseGuideItem = (colItems) =>{
    let itemList = [];
    if(!!colItems)
    colItems.forEach((val,index) => {
      if((index % 4) === 0)//每三个为一行
        itemList[itemList.length] = {
          guides: [val]
        };
      else
      {
        itemList[itemList.length-1].guides.push(val);
      }
    })
    return itemList;
  }

  render(){
    const {guideLi} = this.state;

    return (
      <Fragment>
        {
          guideLi.map((value,index) => (
            <li key={'guide-li-' + index} className={value.parent ? 'p-guide' : 'c-guide'}>
              <GuideItem key={'guide-item-' + index} menu={value} />
            </li>
          ))
        }
      </Fragment>
    );
  }
}

export default SidebarNavItem;