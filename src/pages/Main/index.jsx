import React, { Component } from 'react';
import Navbar from '../Navbar';
import SubNav from '../SubNav';
import Sidebar from '../Sidebar';
import Banner from '../Banner';
import { Main } from './style';
import Contacts from '../Contacts';
import Collections from '../Collections';
import SubCollections from '../SubCollections';
import Trending from '../Trending';
import Container from '../Container';

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
            <Contacts />
            <Main.Collection>
              <Collections />
              <SubCollections />
            </Main.Collection>
            <Trending />
            <Container/>
          </div>
        );
    }
}
