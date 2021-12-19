import React, { Component } from 'react';
import { Wrapper } from './style';
import Sofa from '../../assets/images/sofa.png';
import Chair from '../../assets/images/furniture1.png';
import Chair1 from '../../assets/images/furniture2.png';
import Chair2 from '../../assets/images/furniture3.png';

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
        <Wrapper.Sofa>
          <img src={Sofa} alt='' width='350px' height='350px' />
        </Wrapper.Sofa>
        <Wrapper.Furniture>
          <img src={Chair} alt='' />
          <img src={Chair1} alt='' />
          <img src={Chair2} alt='' />
        </Wrapper.Furniture>
      </Wrapper>
    );
  }
}
