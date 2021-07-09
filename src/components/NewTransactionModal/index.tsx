import {FormEvent, useContext, useState} from "react"
import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import {TransactionsContext} from "../../TransactionsContext"
import {Container, RadioBox, TransactionTypeContainer} from './styles'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      title,
      amount,
      category,
      type
    })
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
          value={amount}
          onChange={event => setAmount(Number(event.target.value))} />

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
