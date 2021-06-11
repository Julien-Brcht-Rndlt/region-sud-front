import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledSubTitleH2 = styled.h2`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.blueFeatureColor};
  font-size: 2rem;
`;

export default function StyledSubTitle({ subtitle }) {
  return <StyledSubTitleH2>{subtitle}</StyledSubTitleH2>;
}

StyledSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
