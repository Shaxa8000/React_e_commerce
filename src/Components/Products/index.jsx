import React, { Component } from 'react';
import { Wrapper, Text, SubText } from './style';

export default class index extends Component {
    render() {
        return (
          <div>
            <Text>Our Products</Text>
            <SubText>
              <SubText.Text>All Products</SubText.Text>
              <SubText.Text>Best Sellers</SubText.Text>
              <SubText.Text>New Arrivals</SubText.Text>
              <SubText.Text>Todays Deals</SubText.Text>
            </SubText>
            <Wrapper></Wrapper>
          </div>
        );
    }
}
