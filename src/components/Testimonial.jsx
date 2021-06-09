import PropTypes from 'prop-types';
import {
  TestimonialContainer,
  TestimonialAvatar,
  TestimonialContent,
  TestimonialAuthor,
} from '../assets/styles/StyledTestimonial';
import avatar from './avatar.png';

export default function Testimonial({ content, author }) {
  return (
    <TestimonialContainer>
      <TestimonialAvatar src={avatar} alt="avatar" />
      <TestimonialContent>{content}</TestimonialContent>
      <TestimonialAuthor>{author}</TestimonialAuthor>
    </TestimonialContainer>
  );
}

Testimonial.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
