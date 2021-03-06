import styled, {css} from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Case } from '../../assets/icons/basket.svg';
import { ReactComponent as Bell } from '../../assets/icons/bell.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';

export const Wrap = styled.div`
  width: 100%;
  height: 92px;
  background: #fff;
  display: flex;
  align-items: center;
`;

Wrap.Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
  display: flex;
  align-items: center;
`;

Wrap.LogoIcon = styled(Logo)`
  width: 31px;
  height: 38px;
  padding: 5px;
`;

Wrap.Input = styled.input`
  margin-left: 120px;
  width: 403px;
  height: 46px;
  border: 2px solid #7ac751;
  border-right-color: rgba(227, 227, 227, 0.78);
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

Wrap.Select = styled.select`
  width: 123px;
  height: 46px;
  border: 2px solid #7ac751;
  background-color: #fff;
  border-left-width: 0px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  outline: none;
  margin-right: 201px;
`;


Wrap.IconContainer = styled.div`
  display: flex;
  align-items: center;
`;


const common = css`
  width: 24px;
  height: 24px;
  padding: 0px 28px;

`;



Wrap.Case = styled(Case)`
  ${common}
`;

Wrap.Bell = styled(Bell)`
  ${common}
`;

Wrap.User = styled(User)`
  ${common}
`;