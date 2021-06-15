import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledLink } from '../../styles/StyledNavBar';

export const StyledNavBarItem = styled.div`
  display: inline-block;
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
