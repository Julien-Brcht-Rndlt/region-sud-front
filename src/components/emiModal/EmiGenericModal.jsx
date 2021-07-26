import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';
import Close from '../../assets/img/close.png';

const StyledModalOverlay = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalContainer = styled.div`
  background-color: ${(props) => props.theme.greyFeatureColor};
  width: 50%;
  padding-right: 65px;
  padding-left: 45px;
`;

const StyledHeaderContainer = styled(Flex)`
  width: auto;
  justify-content: space-between;
`;

const StyledClosePicture = styled.img`
  height: 25px;
  width: 25px;
  padding: 15px;
`;

function EmiGenericModal({
    children,
    renderModalHeader,
    renderModalFooter,
    show,
    setShow,
    }) {
    const closeModalHandler = () => {
        setShow(false);
    };

    if (!show) {
        return null;
    }

    return (
      <StyledModalOverlay center valign="center" onClick={() => closeModalHandler()}>
        <StyledModalContainer onClick={(event) => event.stopPropagation()}>
          <EmiModalHeader closeModalHandler={closeModalHandler}>
            {renderModalHeader()}
          </EmiModalHeader>
          <EmiModalBody>
            {children}
          </EmiModalBody>
          <EmiModalFooter>
            {renderModalFooter()}
          </EmiModalFooter>
        </StyledModalContainer>
      </StyledModalOverlay>
    );
}

const EmiModalHeader = ({ children, closeModalHandler }) => (
  <StyledHeaderContainer>
    {children}
    <button style={{ background: 'none', border: 'none' }} type="button" onClick={() => closeModalHandler()}>
      <StyledClosePicture src={Close} alt="closed" />
    </button>
  </StyledHeaderContainer>
    );

const EmiModalBody = ({ children }) => (
  <div>
    {children}
  </div>
      );

const EmiModalFooter = ({ children }) => (
  <div>
    {children}
  </div>
    );

EmiGenericModal.propTypes = {
    children: PropTypes.node.isRequired,
    renderModalHeader: PropTypes.func.isRequired,
    renderModalFooter: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};

EmiModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    closeModalHandler: PropTypes.func.isRequired,
};

EmiModalBody.propTypes = {
    children: PropTypes.node.isRequired,
};

EmiModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmiGenericModal;
