import React, { Component } from 'react';
import { Wrapper } from './style';

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Wrapper.Box1 />
        <Wrapper.Text>
          Free shipping
          <Wrapper.Cost /> Orders over 100$
        </Wrapper.Text>
        <Wrapper.Box2 />
        <Wrapper.Text>
          Smart GiftCard
          <Wrapper.Cost /> Orders over 100$
        </Wrapper.Text>
        <Wrapper.Box3 />
        <Wrapper.Text>
          Quick Payment
          <Wrapper.Cost /> Orders over 100$
        </Wrapper.Text>
        <Wrapper.Box4 />
        <Wrapper.Text>
          24/7 Support
          <Wrapper.Cost /> Orders over 100$
        </Wrapper.Text>
      </Wrapper>
    );
  }
}
