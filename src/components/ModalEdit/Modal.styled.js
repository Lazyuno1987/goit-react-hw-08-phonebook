import styled from 'styled-components';

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 200px;
  max-width: 400px;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
 
`;

export const Label = styled.label`
margin-bottom: 10px;
width: 300px;
display: flex;
justify-content: space-between;
font-size: 18px;
font-weight: 500;
`

export const Input = styled.input`
width: 200px;
border-radius: 10px;
margin-bottom: 20px;
padding: 5px;
`

export const Button = styled.button`
width: 150px ;
border-radius: 10px;
padding: 5px;
`