import styled from 'styled-components';
import {
  FlexJustStart,
  Block,
  FlexJustCenter,
} from './genericStyles/StyledContainer';

export const StyledInfosFormsContainer = styled(Block)`
  background-color: ${(props) => props.theme.greyFeatureColor};
  padding-left: 70px;
  padding-top: 30px;
  padding-bottom: 7rem;
`;

export const StyledInfosFormsColsContainer = styled(FlexJustStart)`
  background-color: ${(props) => props.theme.greyFeatureColor};
  width: 100%;
`;

export const StyledInfosFormsColContainer = styled.div`
  width: 90%;
`;

export const StyledInfosFormsColLeftContainer = styled(
  StyledInfosFormsColContainer
)`
  width: 55%;
`;

export const StyledButtonContainer = styled(FlexJustCenter)`
  padding-top: 30px;
  display: flex;
  width: 80%;
`;
