// import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Testimony({ avatar, content, author }) {
  return (
    <div>
      <div>
        <img src={avatar} alt="" />
      </div>
      <div>
        <p>{content}</p>
      </div>
      <div>
        <span>{author}</span>
      </div>
    </div>
  );
}

Testimony.propTypes = {
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
