import styled from 'styled-components';
import Rec1 from '../../assets/images/rec1.png';
import Rec2 from '../../assets/images/rec2.png';


export const Wrapper = styled.div`
display: flex;
column-gap: 30px;
margin-bottom: 120px;
`

Wrapper.Img = styled.div`
background-image: url(${Rec1});
background-size: 100% 100%;
width:570px;
height:249px;
`;

Wrapper.Img2 = styled.div`
  background-image: url(${Rec2});
  background-size: 100% 100%;
  width: 570px;
  height: 249px;
`;