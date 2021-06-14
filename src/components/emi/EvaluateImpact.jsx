import styled from 'styled-components';
import RequireContainer from '../requirements/RequireContainer';
import InfosForm from '../infosForm/InfosForm';

export const StyledEvaluateImpactContainer = styled.div``;

export default function EvaluateImpact() {
  return (
    <StyledEvaluateImpactContainer>
      <RequireContainer />
      <InfosForm />
    </StyledEvaluateImpactContainer>
  );
}
