import styled from 'styled-components';
import {
  Flex,
  Block,
} from './genericStyles/GenericContainers';

export const StyledInfosFormsContainer = styled(Block)`
  background-color: ${(props) => props.theme.greyFeatureColor};
  padding-left: 70px;
  padding-top: 30px;
  padding-bottom: 7rem;
`;

export const StyledInfosFormsColsContainer = styled(Flex)`
  justify-content: flex-start;
  background-color: ${(props) => props.theme.greyFeatureColor};
  width: 100%;
`;

export const StyledInfosFormsColContainer = styled.div`
  width: 90%;
`;

export const StyledInfosFormsColLeftContainer = styled(StyledInfosFormsColContainer)`
  width: 55%;
`;

export const StyledButtonContainer = styled(Flex)`
  justify-content: center;
  padding-top: 30px;
  width: 80%;
`;
