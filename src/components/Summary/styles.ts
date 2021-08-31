import styled from "styled-components";

export const Container = styled.div`

    

    display: grid;
    //3 colunas de 1 tamanho 1fr 1fr 1fr
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;

    div{
        background: var(--mint-cream);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        z-index: 0;
        
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        /* font-weight: normal; */
        line-height: 3rem;
    }

    .highlightBackground {
        background-color: var(--bottle-green);
        color: var(--mint-cream);
    }
`