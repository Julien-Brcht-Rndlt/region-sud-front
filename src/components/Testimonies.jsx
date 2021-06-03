// import styled from 'styled-components';
import Testimony from './Testimony';
import {
  TestimoniesContainer,
  TestimoniesTitle,
} from '../styles/StyledTestimonies';

export default function Testimonies() {
  const testimonies = [
    {
      avatar: '',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium eligendi repellendus est sed non nemo adipisci. Et laudantium aperiam temporibus dolorem voluptatem nihil, obcaecati exercitationem facere animi necessitatibus.',
      author: "M. Régate, Anoi club de voile d'Istres",
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
    <>
      <div>
        <TestimoniesTitle>ILS L&apos;ONT UTILIS&Eacute;</TestimoniesTitle>
      </div>
      <TestimoniesContainer>
        {testimonies.map((testimony) => (
          <Testimony {...testimony} />
        ))}
      </TestimoniesContainer>
    </>
  );
}
