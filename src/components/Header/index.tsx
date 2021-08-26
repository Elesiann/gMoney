import { useState } from "react";
import logoImg from "../../assets/logo.png";
import Modal from "react-modal";
import { Container } from "./styles";
import { Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <a href="#">
          {" "}
          <img className="logo" src={logoImg} alt="gMoney" />
        </a>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
