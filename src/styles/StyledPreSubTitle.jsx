import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledPreSubTitleP = styled.span`
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-weight: ${(props) => props.theme.fontWeightNormal};
  color: ${(props) => props.theme.blueFeatureColor};
  font-size: 1.2rem;
`;

export default function StyledPreSubTitle({ content }) {
  return <StyledPreSubTitleP>{content}</StyledPreSubTitleP>;
}

StyledPreSubTitle.propTypes = {
  content: PropTypes.string.isRequired,
};
