import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledLink } from '../../styles/StyledNavBar';
import { device } from '../../styles/theme';

export const StyledNavBarItem = styled.div`
@media ${device.mobileS} {
  font-size: 0.8rem;
  font-weight:normal;
  letter-spacing:0.5px;
}
@media ${device.mobileL} {
  font-size: 1rem;
}
@media ${device.tablet} {
  font-size: 1.3rem;
  letter-spacing:1px;
}

@media ${device.laptop} {
  display: inline-block;
  font-family: ${(props) => props.theme.fontFamilyFeature};
  font-size: 1.6rem;
  letter-spacing: 1px;
  padding: 10px 45px;
  font-weight: lighter;
  text-align: center;
}
`;

export default function NavBarItem({ id, content, path }) {
  return (
    <StyledNavBarItem>
      <li>
        <StyledLink key={id} to={path}>
          {content}
        </StyledLink>
      </li>
    </StyledNavBarItem>
  );
}

NavBarItem.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
