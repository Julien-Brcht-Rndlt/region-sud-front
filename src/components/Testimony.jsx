// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  TestimonyContainer,
  TestimonyAvatar,
  TestimonyContent,
  TestimonyAuthor,
} from '../styles/StyledTestimony';
import avatar from './avatar.png';

export default function Testimony({ content, author }) {
  return (
    <TestimonyContainer>
      <TestimonyAvatar src={avatar} alt="avatar" />
      <TestimonyContent>{content}</TestimonyContent>
      <br />
      <TestimonyAuthor>{author}</TestimonyAuthor>
    </TestimonyContainer>
  );
}

Testimony.propTypes = {
  // avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
