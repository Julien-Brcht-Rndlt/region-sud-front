import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';

export default function EvalThemeShouldList({ shouldTitle, shouldList }) {
  const StyledShouldListContainer = styled(FlexCol)`
    font-size: 2rem;
  `;

  return (
    <StyledShouldListContainer>
      <h5>{shouldTitle}</h5>
      <ul>
        {shouldList.map(
          // eslint-disable-next-line comma-dangle
          (should) => (
            <li>{should}</li>
          ),
        )}
      </ul>
      <p>Vous pourrez voir toutes les recommandations à la fin de l'évaluations</p>
    </StyledShouldListContainer>
  );
}

EvalThemeShouldList.propTypes = {
  shouldTitle: PropTypes.string,
  shouldList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

EvalThemeShouldList.defaultProps = {
  shouldTitle: '',
};
