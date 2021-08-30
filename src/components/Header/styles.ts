import styled from "styled-components";

export const Container = styled.header`
  background-color: #112c20;
`;

export const Content = styled.div`
  //tamanho maximo da div
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  // ALINHA VERTICALMENTE AO CENTRO AAAAAAAAAAAAAA!!!!!!!!!!!!!!!!
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--illuminating-emerald);
    color: var(--mint-cream);
    border: 0;
    padding: 0.5rem 2rem;
    border-radius: 0.25rem;
    transition: all.3s;
    z-index: 2;
  }

  button:hover {
    filter: drop-shadow(10px 10px 4px #000);
    font-size: 1.1rem;
    background: var(--mint-cream);
    color: var(--background-color);
  }

  .lupin {
    position: absolute;
    width: 250px;
    transform: rotate(45deg);
    z-index: -1;
    opacity: 0.3;
    right: 2rem;
    bottom: 2rem;
  }

`;
