import React, { Component } from 'react';
import { Wrapper } from './style';
import Photo1 from '../../assets/images/photo2.png';
import Photo2 from '../../assets/images/photo3.png';

export default class index extends Component {
    render() {
        return (
          <Wrapper>
            <img src={Photo1} alt='' />
            <img src={Photo2} alt='' />
          </Wrapper>
        );
    }
}
