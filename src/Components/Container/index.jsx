import React, { Component } from 'react';
import { Wrapper, IconWrapper, Offer } from './style';
import Container from '../../assets/images/container.png';
import Container1 from '../../assets/images/container (1).png';
import Container2 from '../../assets/images/container (2).png';
import Container3 from '../../assets/images/container (3).png';
import Container4 from '../../assets/images/container (4).png';
import Container5 from '../../assets/images/container (5).png';
import Container6 from '../../assets/images/container (6).png';
import Container7 from '../../assets/images/container (7).png';


export default class index extends Component {
    render() {
        return (
          <div>
            <Wrapper>
              <img src={Container} alt='' />
              <img src={Container1} alt='' />
              <img src={Container2} alt='' />
              <img src={Container3} alt='' />
              <img src={Container4} alt='' />
              <img src={Container5} alt='' />
              <img src={Container6} alt='' />
              <img src={Container7} alt='' />
            </Wrapper>
            <IconWrapper>
              <IconWrapper.Icon />
              <IconWrapper.Icon />
                </IconWrapper>
                <Offer>
                    SPECIAL OFFER
                </Offer>
          </div>
        );
    }
}
