import logoImg from "../../assets/logo.png";
import { Container } from "./styles";
import { Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <a href="#"> <img className="logo" src={logoImg} alt="gMoney" /></a>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
