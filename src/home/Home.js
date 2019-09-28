import React, { PureComponent, Fragment } from 'react';
import HomeBanner from './Banner';
import Cup from './cup/Cup';
import MainNav from './mainnav/MainNav';
import TitleNav from './TitleNav';
import PanicBuy from './panicbuy/PanicBuy';
import Recommend from './recommend/Recommend';

class Home extends PureComponent{
  render(){
    return (
    <Fragment>
      <HomeBanner></HomeBanner>
      <Cup></Cup>
      <TitleNav></TitleNav>
      <MainNav></MainNav>
      <PanicBuy></PanicBuy>
      <Recommend></Recommend>
    </Fragment>);
  }
}
export default Home;
