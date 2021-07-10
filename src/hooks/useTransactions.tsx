import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {api} from "../services/api"

// interface TransactionInput {
//   title: string,
//   type: string,
//   amount: number,
//   category: string,
// }
interface TransactionsProps {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
}
type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}
interface TransactionsContextData {
  transactions: TransactionsProps[],
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    console.log(response)
    const { transaction } = response.data
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionsContext)
}
