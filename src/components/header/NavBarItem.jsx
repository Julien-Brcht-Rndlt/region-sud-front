import PropTypes from 'prop-types';
import { StyledLink } from '../../styles/StyledNavBar';

export default function NavBarItem({ id, content, path }) {
  return (
    <ul>
      <li>
        <StyledLink key={id} to={path}>
          {content}
        </StyledLink>
      </li>
    </ul>
  );
}

NavBarItem.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
