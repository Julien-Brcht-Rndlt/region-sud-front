import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledTitleH3 } from '../../styles/generics/GenericTitles';
import { FlexCol } from '../../styles/generics/GenericContainers';

export const StyledShouldListLi = styled.li`
  font-size: 18px;
  line-height: 2.5em;
`;
export const StyledShouldListP = styled.p`
  font-size: 16px;
`;
export const StyledShouldContainer = styled(FlexCol)`
  width: 600px;
`;

export default function EvalThemeShouldList({ shouldTitle, shouldList }) {
  return (
    <StyledShouldContainer center>
      <StyledTitleH3>{shouldTitle}</StyledTitleH3>
      <ul>
        {shouldList.map(
          (should) => (
            <StyledShouldListLi>{should.title}</StyledShouldListLi>
          ),
        )}
      </ul>
      <StyledShouldListP>
        Vous pourrez voir toutes les recommandations √† la fin de l&#39;√©valuation
      </StyledShouldListP>
    </StyledShouldContainer>
  );
}

EvalThemeShouldList.propTypes = {
  shouldTitle: PropTypes.string,
  shouldList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

EvalThemeShouldList.defaultProps = {
  shouldTitle: '',
};
