import styled from "styled-components";

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
