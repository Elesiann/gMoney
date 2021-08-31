import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = ({
      title,
      value,
      category,
      type
    })

    api.post('/transactions', data)

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        {/* toda vez que algo é digitado, pega o valor e armazena dentro da propriedade title*/}
        <input placeholder="Título" type="text" value={title} onChange={event => setTitle(event.target.value)} />
        {/* Number converte para numero */}
        <input placeholder="Valor" type="number" value={value} onChange={event => setValue(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <span>Entrada</span>
            <img src={incomeImg} alt="Entrada" />
          </RadioBox>

          <RadioBox type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <span>Saída</span>
            <img src={outcomeImg} alt="Saída" />
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

        <button type="submit">Cadastrar transação</button>
      </Container>
    </Modal>
  );
}
