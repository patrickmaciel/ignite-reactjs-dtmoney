import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { RadioBox, TransactionTypeContainer, Container } from './styles'
import {useState} from "react"

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

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

        <TransactionTypeContainer>
          <RadioBox type={'button'}
                    isActive={type === 'deposit'}
                  onClick={() => { setType('deposit')}} >
            <img src={incomeImg} alt="Entrada" />
            <span>Entarda</span>
          </RadioBox>
          <RadioBox type={'button'}
                    isActive={type === 'withdraw'}
                  onClick={() => { setType('withdraw')}}>
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria"/>
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
