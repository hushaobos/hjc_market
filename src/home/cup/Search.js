import React,{PureComponent} from 'react';
import './Search.less';

class HomeSearch extends PureComponent{
  render(){
    return (<div class="search">
    <input type="text" placeholder="搜索商品"/>
    <button type="submit">搜索</button>
  </div>);
  }
}
export default HomeSearch;