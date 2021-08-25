import logoImg from "../../assets/Logointeira.svg";

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="gMoney" />
      <button type="button">Nova transação</button>
    </header>
  );
}
