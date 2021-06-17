import styled from 'styled-components';
import {
  Flex,
  Block,
} from './generics/GenericContainers';

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
  height: 60px;
`;

export const StyledButtonContainer = styled(Flex)`
  justify-content: center;
  padding-top: 30px;
  width: 80%;
`;

export const StyledInfosInput = styled.input`
  border: 1px solid #005aff;
  background: ${(props) => props.theme.secondaryFeatureColor};
  padding: 10px 15px 15px 15px;
  width: ${(props) => (props.wide ? '100%' : '70%')};
  margin-bottom: 20px;
`;
