// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  TestimonyContainer,
  TestimonyAvatar,
  TestimonyContent,
  TestimonyAuthor,
} from '../styles/StyledTestimony';

export default function Testimony({ avatar, content, author }) {
  return (
    <TestimonyContainer>
      <TestimonyAvatar src={avatar} alt="" />
      <TestimonyContent>{content}</TestimonyContent>
      <TestimonyAuthor>{author}</TestimonyAuthor>
    </TestimonyContainer>
  );
}

Testimony.propTypes = {
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
