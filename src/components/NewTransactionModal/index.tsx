import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import { Container } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button className={'react-modal-close'} type='button' onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar Modal"/>
      </button>
      <Container>
        <h2>Cadastrar Tarnsação</h2>

        <input type="text" placeholder="Titulo"/>
        <input type="number" placeholder="Valor"/>
        <input type="text" placeholder="Categoria"/>
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
