import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { ReactComponent as Icon } from '../../assets/img/helphover.svg';
import { Flex } from '../../styles/generics/GenericContainers';

/* import EmiFaqModal from '../faq/EmiFaqModal'; */

export const CompIconText = styled(Flex)`
  align-items: center;
  justify-content: space-around;
`;

const IconWrapper = styled.div`
  svg {
    width: 35px;
    height: 35px;
    fill: ${(props) => props.fill};
  }
`;

export default function ButtonHelp({ setShow }) {
  const [color, setColor] = useState('blue');
  /* const [show, setShow] = useState(false); */

  return (
    <>
      <StyledButton glassy onMouseOver={() => setColor('#ffffff')} onMouseLeave={() => setColor('#005aff')} onClick={() => setShow(true)}>
        <CompIconText>
          <IconWrapper fill={color}>
            <Icon />
          </IconWrapper>
          Je ne m&#39;en sors pas !
        </CompIconText>
      </StyledButton>
      {/*  <EmiFaqModal show={show} setShow={setShow} /> */}
    </>
  );
}

ButtonHelp.propTypes = {
  setShow: PropTypes.func.isRequired,
};
