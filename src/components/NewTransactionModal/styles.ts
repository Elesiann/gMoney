import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 500;
    font-size: 1rem;
    background: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1.25rem;
    }
  }

  button[type="submit"] {
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: none;
    background-color: var(--illuminating-emerald);
    color: #fff;
    width: 100%;
    font-size: 1.25rem;
    margin-top: 1.5rem;
    transition: 0.2s;

    &:hover {
      background-color: var(--ocean-green-2);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all.2s;

    &:hover {
      border-color: ${darken(0.2, "#d7d7d7")};
    }
  }

  img {
    height: 28px;
    width: 28px;
  }

  span {
    display: inline-block;
    letter-spacing: 0.25rem;
    font-size: 1.25rem;
    font-weight: 500;
    margin-right: 1rem;
    color: var(--text-title);
  }
`;
