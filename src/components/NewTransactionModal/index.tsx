import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [type, setType] = useState('deposit')


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
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" type="text" />

        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <RadioBox 
          type="button"
          onClick={() => {setType('deposit');}}
          isActive={type === 'deposit'}
          >
            <span>Entrada</span>
            <img src={incomeImg} alt="Entrada" />
          </RadioBox>

          <RadioBox type="button"
          onClick={() => {setType('withdraw');}}
          isActive={type === 'withdraw'}

          >
            <span>Saída</span>
            <img src={outcomeImg} alt="Saída" />
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar transação</button>
      </Container>
    </Modal>
  );
}
