import PropTypes from 'prop-types';
import {
  TestimonialContainer,
  TestimonialAvatar,
  TestimonialContent,
  TestimonialAuthor,
  TestimonialOpeningQuote,
  TestimonialClosingQuote,
  TestimonialAlignQuotes,
} from '../assets/styles/StyledTestimonial';
import avatar from './avatar.png';
import openingQuotes from './opening_quotes.png';
import closingQuotes from './closing_quotes.png';

export default function Testimonial({ content, author }) {
  return (
    <TestimonialContainer>
      <TestimonialAvatar src={avatar} alt="avatar" />
      <TestimonialAlignQuotes>
        <TestimonialOpeningQuote src={openingQuotes} alt="opening quotes" />
        <TestimonialContent>{content}</TestimonialContent>
      </TestimonialAlignQuotes>
      <TestimonialClosingQuote src={closingQuotes} alt="closing quotes" />
      <TestimonialAuthor>{author}</TestimonialAuthor>
    </TestimonialContainer>
  );
}

Testimonial.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
