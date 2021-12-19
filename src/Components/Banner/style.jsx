import styled from 'styled-components';



export const Wrapper = styled.div`
display: flex;
  width: 899px;
  height: 430px;
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  border-radius: 1px;
  margin-top: 11px;
  margin-left: 11px;
  box-sizing: border-box;
`;

Wrapper.Container = styled.div`
text-align: center;
position: relative;
top: 20%;
left: 30px;


`

Wrapper.Text = styled.div`
  width: 279px;
  height: 25px;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 15px;
  letter-spacing: 0.05em;
  color: #7ac751;
  margin-left: 20px;
`;

Wrapper.Info = styled.div`
  width: 318px;
  height: 94px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #2f2f2f;
  text-align: left;
  margin-left: 47px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

Wrapper.Discount = styled.div`
  width: 324px;
  height: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);
  margin-left: 40px;
  margin-bottom: 30px;
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
  margin-left: 47px;
`;

Wrapper.Sofa = styled.div`
width: 367px;
height: 367px;
margin-top: 50px;
margin-left: 30px;
`;


Wrapper.Furniture = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: space-around;
row-gap: 30px;
`
