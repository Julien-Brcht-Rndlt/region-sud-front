import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModalOverlay = styled.div``;

const StyledModalContainer = styled.div``;

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
      <StyledModalOverlay onClick={() => closeModalHandler()}>
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
  <div>
    { children }
    <button type="button" onClick={() => closeModalHandler()}>Close</button>
  </div>
    );

const EmiModalBody = ({ children }) => (
  <div>
    {children}
  </div>
      );

const EmiModalFooter = ({ children }) => (
  <div>
    { children }
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
