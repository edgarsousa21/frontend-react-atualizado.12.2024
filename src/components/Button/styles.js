import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #FFF'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover{
        opacity: 0.8;
        background: ${ props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)'  : '#FFF' };
        color: ${ props => props.theme === 'primary' ? '#FFF' : 'blue' };
    }

    &:active{
        opacity: 0.6;
    }
`


// ${ props => props.theme === 'primary' ? '' : '' }