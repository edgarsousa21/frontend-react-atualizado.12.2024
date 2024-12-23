import styled from "styled-components";


export const Container = styled.div`
    background-color: #181F36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;

`

export const Title = styled.h2`
    color: #FFF;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #D2DAE2;
    background-color: #FFF;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #FFF;
    font-size: 12px;
    font-weight: 500;


    span{
        color: #EF4F45;
        font-weight: bold;
    }
`

// export const Button = styled.button`
//     border: none;
//     background: linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);
//     font-size: 16px;
//     color: #fff;
//     padding: 16px 32px;
//     width: fit-content;
//     cursor: pointer;
//     border-radius: 30px;

//     &:hover{
//         opacity: 0.8;
//     }

//     &:active{
//         opacity: 0.6;
//     }

// `







