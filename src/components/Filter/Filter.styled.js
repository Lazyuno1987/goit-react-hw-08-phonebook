import styled from "styled-components";



export const Label = styled.label`

margin-top: 10px;
display: flex;

align-items: flex-end;
flex-direction: column;

font-family: 'Dancing Script';
font-size: 30px;
font-weight: 500;
color: #e7eaf2;
`

export const Input = styled.input`

  background-color: #e7eaf2;
    opacity: 0.7;
    padding: 10px;
width: 100%;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;

    &::placeholder {
        color: black;
        font-family: 'Dancing Script';
        font-weight: 700;
        font-size: 20px;

    }
`