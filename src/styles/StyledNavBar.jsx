import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './theme';

export const StyledNavBar = styled.nav`

@media ${device.mobileS} {
  ul {
    display:block;
    list-style:none;
  }
}

@media ${device.laptop} {
  display: inline-block;
  width: 75%;
  font-size: 15px;
  text-decoration: none;
  margin: 15px;
  font-size: 20px;
  font-weight: 400;
  padding: 15px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    
  }
}

`;
export const StyledLink = styled(Link)`
@media ${device.mobileS} {
  color: ${(props) => props.theme.secondaryFeatureColor};
  text-decoration: none;
  &:hover {
    color: #FECA5A;
  }
}

@media ${device.laptop} {
  color: ${(props) => props.theme.secondaryFeatureColor};
  text-decoration: none;
  &:hover {
    color: #FECA5A;
  }
}
`;
