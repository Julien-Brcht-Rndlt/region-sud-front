import styled from 'styled-components';
import { FlexJustStart, Block } from './genericStyles/StyledContainer';

export const StyledInfosFormsContainer = styled(Block)`
  background-color: ${(props) => props.theme.greyFeatureColor};
`;

export const StyledInfosFormsColsContainer = styled(FlexJustStart)`
  background-color: ${(props) => props.theme.greyFeatureColor};
  width: 80%;
  height: 25rem;
`;

export const StyledInfosFormsColContainer = styled.div`
  width: 50rem;
  height: 25rem;
`;
