import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RequireContainer from '../requirements/RequireContainer';
import InfosEvalForm from '../infosEvalForm/InfosEvalForm';
import EvalProcess from './EvalProcess';

export const StyledEvaluateImpactContainer = styled.div``;

export default function EvalMyImpact() {
  const { id } = useParams();

  return (
    <StyledEvaluateImpactContainer>
      <RequireContainer />
      <InfosEvalForm />
      <EvalProcess id={id} />
    </StyledEvaluateImpactContainer>
  );
}
