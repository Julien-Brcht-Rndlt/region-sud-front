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
      <div>
        {' '}
        <TestimonyAvatar src={avatar} alt="" />{' '}
      </div>
      <TestimonyContent>{content}</TestimonyContent>
      <br />
      <TestimonyAuthor>{author}</TestimonyAuthor>
    </TestimonyContainer>
  );
}

Testimony.propTypes = {
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
