import styled from 'styled-components';
import RequireContainer from '../requirements/RequireContainer';
import InfosEvalForm from '../infosEvalForm/InfosEvalForm';
import Funnel from '../funnel/Funnel';

export const StyledEvaluateImpactContainer = styled.div``;

export default function EvaluateImpact() {
  return (
    <StyledEvaluateImpactContainer>
      <RequireContainer />
      <InfosEvalForm />
      <Funnel />
    </StyledEvaluateImpactContainer>
  );
}
