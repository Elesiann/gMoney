// import { useState } from "react";
// import Modal from "react-modal";
import logoImg from "../../assets/logo.png";
import { Container } from "./styles";
import { Content } from "./styles";
import Lupin from "../../assets/lupin.png";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img className="lupin" src={Lupin} alt="lupin" />
          <img className="logo" src={logoImg} alt="gMoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
