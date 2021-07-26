import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import Testimonial from './Testimonial';
import { TestimonialsContainer } from '../../styles/StyledTestimonials';
import { device } from '../../styles/theme';
import { StyledTitleHomeH1, StyledButtonHP } from './TitleHome';

export const StyledButtonTestimonial = styled(Flex)`
  width: auto;
  background-color: ${(props) => props.theme.lightGreyFeatureColor};
  padding: 50px;
`;

export const StyledBorderYellowH1 = styled.hr`
  border: none;

  @media ${device.mobileS} {
    border-bottom: 0;
  }

  @media ${device.mobileL} {
    border-bottom: 4px solid ${(props) => props.theme.yellowFeatureColor};
    height: 7px;
    padding-right: 40px;
    margin: 65px;
    margin-left: 140px;
    position: absolute;
  }

  @media ${device.tablet} {
    border-bottom: 4px solid ${(props) => props.theme.yellowFeatureColor};
    height: 4px;
    padding-right: 90px;
    margin: 158px;
    margin-left: 145px;
    position: absolute;
  }

  @media ${device.desktop} {
    border-bottom: 4px solid ${(props) => props.theme.yellowFeatureColor};
    height: 10px;
    padding-right: 90px;
    margin: 158px;
    margin-left: 145px;
    position: absolute;
  }
`;

const Title = styled(StyledTitleHomeH1)`
  height: 50px;
  margin: 0;
  padding: 110px 0 0 9rem;
  font-family: ${(props) => props.theme.fontFamilyNormal};
  position: relative;
`;

export const StyledContainerYellow = styled(FlexCol)`
  width: 100%;
  background-color: #ebebeb;
  transform: translate(0px, -180px);
`;

export default function Testimonials() {
  const testimonials = [
    {
      avatar: '',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium eligendi repellendus est sed non nemo adipisci. Et laudantium aperiam temporibus dolorem voluptatem nihil, obcaecati exercitationem facere animi necessitatibus.',
      author: "M. Régate,  Anoi club de voile d'Istres",
    },
    {
      avatar: '',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium eligendi repellendus est sed non nemo adipisci. Et laudantium aperiam temporibus dolorem voluptatem nihil, obcaecati exercitationem facere animi necessitatibus.',
      author: 'Mme. Voile, Club Nautique BERROIS',
    },
    {
      avatar: '',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium eligendi repellendus est sed non nemo adipisci. Et laudantium aperiam temporibus dolorem voluptatem nihil, obcaecati exercitationem facere animi necessitatibus.',
      author: 'M. Marée Club Nautique Marignais',
    },
  ];

  return (
    <StyledContainerYellow>
      <Title>ILS L&apos;ONT UTILIS&Eacute;</Title>
      <StyledBorderYellowH1 />
      <TestimonialsContainer>
        {testimonials.map((testimony) => (
          <Testimonial {...testimony} />
        ))}
      </TestimonialsContainer>
      <StyledButtonTestimonial center>
        <HashLink to="/EmiStart#">
          <StyledButtonHP>Je m&apos;engage moi aussi !</StyledButtonHP>
        </HashLink>
      </StyledButtonTestimonial>
    </StyledContainerYellow>
  );
}
