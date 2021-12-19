import React, { Component } from 'react';
import { Wrapper } from './style';
import Photo1 from '../../assets/images/photo1.png';

export default class index extends Component {
  render() {
    return (
        <Wrapper>
          <img src={Photo1} alt='' />
            </Wrapper>
    );
  }
}
