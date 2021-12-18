import React, { Component } from 'react';
import { Wrap } from './style';

export default class index extends Component {
    render() {
        return (
          <Wrap>
            <Wrap.Logo>
              <Wrap.LogoIcon /> FURNIKING
              <Wrap.Input />
            </Wrap.Logo>
            <Wrap.Select>
              <option value=''>Category</option>
              <option value=''>Category</option>
              <option value=''>Category</option>
              <option value=''>Category</option>
            </Wrap.Select>
            <Wrap.IconContainer>
              <Wrap.Case />
              <Wrap.Bell />
              <Wrap.User/>
            </Wrap.IconContainer>
          </Wrap>
        );
    }
}
