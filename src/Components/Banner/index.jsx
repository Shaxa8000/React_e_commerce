import React, { Component } from 'react';
import { Wrapper, PhotoWrapper, FurWrapper } from './style';


export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Wrapper.Container>
          <Wrapper.Text>Top Collections 2022</Wrapper.Text>
          <Wrapper.Info>We Serve Your Dream Furniture</Wrapper.Info>
          <Wrapper.Discount>Get 50% off all products</Wrapper.Discount>
          <Wrapper.Button>SHOP NOW</Wrapper.Button>
        </Wrapper.Container>
        <PhotoWrapper>
          <Wrapper.Armchair />
        </PhotoWrapper>
        <FurWrapper>
          <Wrapper.Furniture />
          <Wrapper.Armchair1 />
          <Wrapper.Armchair2 />
        </FurWrapper>
      </Wrapper>
    );
  }
}
