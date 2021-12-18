import styled from 'styled-components';
import { ReactComponent as Armchair} from '../../assets/images/furniture.svg';
import { ReactComponent as Furniture } from '../../assets/images/furniture1.svg';
import { ReactComponent as Armchair1 } from '../../assets/images/furniture2.svg';
import { ReactComponent as Armchair2 } from '../../assets/images/furniture3.svg';

export const Wrapper = styled.div`
display: flex;
  width: 899px;
  height: 443px;
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(155px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1px;
  margin-top: 11px;
  margin-left: 11px;
  box-sizing: border-box;
`;

Wrapper.Container = styled.div`
text-align: center;
`

Wrapper.Text = styled.div`
  width: 279px;
  height: 25px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 15px;
  /* or 118% */

  letter-spacing: 0.05em;

  /* Main Color */

  color: #7ac751;
`;

Wrapper.Info = styled.div`
  width: 318px;
  height: 94px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #2f2f2f;
  margin-bottom: 29px;
//   text-align: justify;
  text-justify: inter-word;
`;

Wrapper.Discount = styled.div`
  width: 324px;
  height: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);
  margin-left: 20px;
`;

Wrapper.Button = styled.div`
  width: 129px;
  height: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  color: #ffffff;
  background: #7ac751;
  border-radius: 5px;
  margin-top: 35px;
  margin-left: 25px;
`;

export const PhotoWrapper = styled.div`
margin-top: 36px;
margin-bottom: 29px;
`

Wrapper.Armchair = styled(Armchair)`

`

export const FurWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 63px;
margin-bottom: 63px;
`

Wrapper.Furniture = styled(Furniture)`

`

Wrapper.Armchair1 = styled(Armchair1)`

`

Wrapper.Armchair2 = styled(Armchair2)`
`;


