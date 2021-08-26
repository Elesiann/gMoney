import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    //tables por padrao nao ocupam todo o width
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--mint-cream);
      font-weight: 700;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 2rem;
      background-color: var(--bottle-green);

      &:first-child {
        font-weight: 600;
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--mint-cream);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        font-weight: 600;
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.deposit {
        color: var(--illuminating-emerald);
      }
      &.withdraw {
        color: var(--red-color);
      }
    }
  }
`;
