import Testimony from './Testimony';
import {
  TestimonialsContainer,
  TestimonialsTitle,
} from '../assets/styles/StyledTestimonials';

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
    <>
      <div>
        <TestimonialsTitle>ILS L&apos;ONT UTILIS&Eacute;</TestimonialsTitle>
      </div>
      <TestimonialsContainer>
        {testimonials.map((testimony) => (
          <Testimony {...testimony} />
        ))}
      </TestimonialsContainer>
    </>
  );
}
