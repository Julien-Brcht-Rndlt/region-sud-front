import styled from 'styled-components';
import { Flex, Block } from './generics/GenericContainers';
import { device } from './theme';

export const StyledInfosFormsContainer = styled(Block)`
  background-color: ${(props) => props.theme.greyFeatureColor};
  padding-left: 70px;
  padding-top: 30px;
  padding-bottom: 7rem;
  margin: 4rem 2rem;
`;

export const StyledInfosFormsColsContainer = styled(Flex)`
  @media ${device.mobileS} {
    flex-direction: column;
    width: 320px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: 70%;
  }

  @media ${device.laptop} {
    justify-content: flex-start;
    flex-direction: row;
    background-color: ${(props) => props.theme.greyFeatureColor};
    width: 100%;
  }
`;

export const StyledInfosFormsColContainer = styled.div`
  width: 90%;
`;

export const StyledInfosFormsColLeftContainer = styled(StyledInfosFormsColContainer)`
  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 70%;
  }

  @media ${device.laptop} {
    width: 50%;
  }
`;

export const StyledButtonContainer = styled(Flex)`
  justify-content: center;
  padding-top: 30px;
  width: 80%;
`;

export const StyledInfosInput = styled.input`
  border: 1px solid ${(props) => props.theme.blueFeatureColor};
  background: ${(props) => props.theme.secondaryFeatureColor};
  margin-bottom: 20px;

  @media ${device.mobileS} {
    padding: 5px 5px 5px 5px;
    width: ${(props) => (props.wide ? '50%' : '40%')};
    flex-wrap: wrap;
  }
  @media ${device.laptop} {
    padding: 10px 15px 15px 15px;
    width: ${(props) => (props.wide ? '100%' : '70%')};
    margin-bottom: 20px;
  }
`;
