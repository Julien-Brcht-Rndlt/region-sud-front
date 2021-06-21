import styled from 'styled-components';
import { device } from '../../styles/theme';
import { Flex } from '../../styles/generics/GenericContainers';

export const StyledMapHome = styled(Flex)`
 
  @media ${device.mobileS}{
    margin-left:7px;
    margin-bottom:10px;
    }

  @media ${device.mobileM}{
    margin-left:8px;
    margin-bottom:10px;
    }

  @media ${device.mobileL}{
      margin-left:9px;
      margin-bottom:10px;
    }

  @media ${device.tablet}{
      margin: 10px 8px 10px 20px;
    }

  @media ${device.laptop}{
      margin: 10px 0 10px 50px;
    }
`;

export const StyledIframe = styled.iframe`
 @media ${device.mobileS}{
    width: 300px;
    height: 170px;
    margin-left: 0;
    }

@media ${device.mobileM}{
    width: 340px;
    height: 200px;
    margin-left: 10px;
    }

    @media ${device.mobileL}{
    width: 360px;
    height: 250px;
    margin-left: 10px;
    }

    @media ${device.tablet}{
    width: 380px;
    height: 350px;
    margin-left: 20px;
    }

    @media ${device.laptop}{
    width: 600px;
    height: 450px;
    padding-left: 0px;
    }
`;

export default function MapHome() {
  return (
    <StyledMapHome>
      <StyledIframe
        title="Marseille"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185895.7750904525!2d5.240412480301827!3d43.28030508037853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille!5e0!3m2!1sfr!2sfr!4v1622664834270!5m2!1sfr!2sfr"
      />
    </StyledMapHome>
  );
}
