import PropTypes from 'prop-types';
import { Flex } from '../../styles/genericStyles/GenericContainers';
import {
  TestimonialContainer,
  TestimonialAvatar,
  TestimonialContent,
  TestimonialAuthor,
  TestimonialQuote,
} from '../../styles/StyledTestimonial';
import avatar from '../../assets/img/avatar.png';
import openingQuotes from '../../assets/img/opening_quotes.png';
import closingQuotes from '../../assets/img/closing_quotes.png';

export default function Testimonial({ content, author }) {
  return (
    <TestimonialContainer>
      <TestimonialAvatar src={avatar} alt="avatar" />
      <Flex>
        <TestimonialQuote src={openingQuotes} alt="opening quotes" opening />
        <TestimonialContent>{content}</TestimonialContent>
      </Flex>
      <TestimonialQuote src={closingQuotes} alt="closing quotes" />
      <TestimonialAuthor>{author}</TestimonialAuthor>
    </TestimonialContainer>
  );
}

Testimonial.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
