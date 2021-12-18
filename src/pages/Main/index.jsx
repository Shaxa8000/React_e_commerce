import React, { Component } from 'react';
import Navbar from '../Navbar';
import SubNav from '../SubNav';
import Sidebar from '../Sidebar';
import Banner from '../Banner';
import { Main } from './style';

export default class index extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <SubNav />
            <Main>
              <Sidebar />
              <Banner />
            </Main>
          </div>
        );
    }
}
