import styled from 'styled-components';

import {FaDropbox} from 'react-icons/fa';

export const Container = styled.div`
display: flex;
flex-direction: column;
height:100%;

@media(min-width:1024px){
  max-width:480px;
}
`;


export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;

padding: 16px 32px;
min-height: 61px;

>h1 {
  display: flex;
  align-items: center;
  > span{
    color:var(--color-quaternary);
    margin-left: 10px;
    font-size: 29px;
    
  }
}

> button{
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
}

@media (min-width: 1024px){
  justify-content: flex-end;
  > h1 {
    display: none;
  }
}

`;


export const DropBoxLogo = styled(FaDropbox)`
width: 36px;
height: 32px;
fill:var(--color-blue);

`;


export const Form = styled.form`
display: flex;
flex-direction: column;
height:100%;
justify-content: center;
padding: 0 32px;
max-width: 480px;
margin: 0 auto;

> .title{
  font-size: 25px;
  font-weight: 500;
}

> .subtitle{
  font-size: 12px;
  margin-top: 3px;

}

> input{
  background: var(--color-tertiary);
  border:1px solid var(--color-border);
  padding: 13px 18px;

  font-size: 14px;

  margin-top: 18px;
}

> button {
  margin-top: 18px;
  background: var(--color-blue);
  color:var(--color-tertiary);

  font-size: 16px;
  padding:13px 18px;

  cursor: pointer;
  transition: .2s;
  &:hover{
    opacity:.7;
  }

  
}

> .terms{
    font-size: 12px;
    opacity:.6;
    margin-top: 4px;

  }
`;




