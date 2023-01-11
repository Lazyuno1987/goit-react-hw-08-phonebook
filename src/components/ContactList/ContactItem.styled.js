import styled from "styled-components";

export const ItemContact = styled.li`
padding: 5px;
display: flex;
align-items: center;
justify-content: space-between;

background-color:#e7eaf2 ;
margin-bottom: 5px;
border-radius: 10px;
@media  (min-width: 1280px) {
    width: 50%;
    font-size: 24px;
}

`;

export const Text = styled.p`
font-family: "Dancing Script";
/* margin: 0;
margin-right: 10px; */


`;

export const Button = styled.button`

height: 30px;
padding: 5px;
border-radius: 50px;
margin-left: 10px;
border: 2px solid black;
@media (min-width: 1280px){
        width: 40px;
    height: 40px;
}

`;
