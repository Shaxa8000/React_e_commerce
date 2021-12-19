import styled from 'styled-components';
import { ReactComponent as Box1 } from '../../assets/icons/box1.svg';
import { ReactComponent as Box2 } from '../../assets/icons/box2.svg';
import { ReactComponent as Box3 } from '../../assets/icons/box3.svg';
import { ReactComponent as Box4 } from '../../assets/icons/box4.svg';


export const Wrapper = styled.div`
display: flex;
margin-top: 70px;
margin-bottom: 70px;
column-gap: 55px;
`

Wrapper.Box1 = styled(Box1)``;
Wrapper.Box2 = styled(Box2)``;
Wrapper.Box3 = styled(Box3)``;
Wrapper.Box4 = styled(Box4)``;

Wrapper.Text = styled.div`
  height: 26px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 10px;
  margin-top: 10px;
  margin-left: 20px;
  color: #555555;
`;

Wrapper.Cost = styled.p`
fonst-size: 10px;
margin-top:0;

`
