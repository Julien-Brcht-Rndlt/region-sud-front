import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledFooterTextContainer = styled.div``;

export default function FooterText({ title, lines = [] }) {
  return (
    <>
      <StyledFooterTextContainer>
        <h4>{title}</h4>
        {lines.map((line) => (
          <div>{line}</div>
        ))}
      </StyledFooterTextContainer>
    </>
  );
}
FooterText.propTypes = {
  title: PropTypes.string,
  lines: PropTypes.arrayOf(PropTypes.string),
};

FooterText.defaultProps = {
  title: '',
  lines: [],
};
