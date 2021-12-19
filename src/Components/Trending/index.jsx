import React, { Component } from 'react';
import { Wrapper, TextWrap } from './style';

export default class index extends Component {
  render() {
    return (
      <div>
        <Wrapper>Trending</Wrapper>
        <TextWrap>
          <TextWrap.Text>Top Products</TextWrap.Text>
          <TextWrap.Text>New Arrivals</TextWrap.Text>
          <TextWrap.Text>Best Sellers</TextWrap.Text>
        </TextWrap>
      </div>
    );
  }
}
