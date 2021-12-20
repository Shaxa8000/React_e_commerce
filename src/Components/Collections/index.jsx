import React, { Component } from 'react';
import {BackWrapper } from './style';
import Photo1 from '../../assets/images/photo1.png';

export default class index extends Component {
  render() {
    return (
      <BackWrapper>
          <img src={Photo1} alt='' />
      </BackWrapper>
    );
  }
}
