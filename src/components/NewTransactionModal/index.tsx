import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { RadioBox, TransactionTypeContainer, Container } from './styles'
import {FormEvent, useState} from "react"
import {api} from "../../services/api"

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    const data = {
      title, value, category, type
    }

    api.post('/transactions', data)
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Tarnsação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)} />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox type={'button'}
                    isActive={type === 'deposit'}
                    activeColor='green'
                  onClick={() => { setType('deposit')}} >
            <img src={incomeImg} alt="Entrada" />
            <span>Entarda</span>
          </RadioBox>
          <RadioBox type={'button'}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                  onClick={() => { setType('withdraw')}}>
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}/>
        <button
          type='submit'
        >Cadastrar</button>
      </Container>
    </Modal>
  )
}
