import styled from 'styled-components'

export const Container = styled.header`
    background-color: #112C20;
`

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
        color: var(--nyanza);
        border: 0;
        padding: .5rem 2rem;
        border-radius: 0.25rem;
        transition: all.3s;
    }

    button:hover{
        filter: drop-shadow(10px 10px 4px #000);
        font-size: 1.1rem;
        background: var(--nyanza);
        color: var(--dark-jungle-green); 
    }
`