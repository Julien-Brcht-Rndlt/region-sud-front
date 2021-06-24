/* import styled from 'styled-components'; */
import PropTypes from 'prop-types';
/* import FaqHeadPicture from '../../assets/img/FaqHeadPicture.png'; */
/* import { Flex } from '../../styles/generics/GenericContainers'; */
import EmiGenericModal from '../emiModal/EmiGenericModal';
import FaqBody, { FaqHeader/* , FaqFooter */ } from './FaqContent';

export default function EmiFaqModal({ show, setShow }) {
    return (
      <EmiGenericModal
        show={show}
        setShow={setShow}
        renderModalHeader={FaqHeader}
        renderModalFooter={() => <div>Coucou Footer</div>}
      >
        <FaqBody />
      </EmiGenericModal>
    );
}

EmiFaqModal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};
