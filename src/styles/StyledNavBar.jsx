import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  display: inline-block;
  width: 75%;
  font-size: 15px;
  text-decoration: none;
  margin: 15px;
  font-size: 25px;
  font-weight: 400;
  padding: 15px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: ${(props) => props.theme.secondaryFeatureColor};
  }
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.secondaryFeatureColor};
  text-decoration: none;
`;