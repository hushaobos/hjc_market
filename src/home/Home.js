import React, { PureComponent, Fragment } from 'react';
import HomeBanner from './Banner';
import Cup from './cup/Cup';
import MainNav from './mainnav/MainNav';
import TitleNav from './TitleNav';

class Home extends PureComponent{
  render(){
    return <Fragment>
              <HomeBanner></HomeBanner>
              <Cup></Cup>
              <TitleNav></TitleNav>
              <MainNav></MainNav>
          </Fragment>;
  }
}
export default Home;