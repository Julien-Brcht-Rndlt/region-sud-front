import PropTypes from 'prop-types';
import {
  TestimonyContainer,
  TestimonyAvatar,
  TestimonyContent,
  TestimonyAuthor,
} from '../assets/styles/StyledTestimony';
import avatar from './avatar.png';

export default function Testimony({ content, author }) {
  return (
    <TestimonyContainer>
      <TestimonyAvatar src={avatar} alt="avatar" />
      <TestimonyContent>{content}</TestimonyContent>
      <TestimonyAuthor>{author}</TestimonyAuthor>
    </TestimonyContainer>
  );
}

Testimony.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
