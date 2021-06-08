import styled from 'styled-components';
import { FlexJustStart, Block } from './genericStyles/StyledContainer';

export const StyledInfosFormsContainer = styled(Block)`
  background-color: ${(props) => props.theme.greyFeatureColor};
`;

export const StyledInfosFormsColsContainer = styled(FlexJustStart)`
  background-color: ${(props) => props.theme.greyFeatureColor};
`;
