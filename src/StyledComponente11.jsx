import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: red;
  font-size: 24px;
  font-weight: bold;
  /* Otros estilos que desees aplicar */
`;

export const Estilando = styled.div`
 display: flex;
 flex-direction:column;
 align-items: center;


  h1 {
    color: purple;
  }
  & :hover{
    color: green;
  }
`;
