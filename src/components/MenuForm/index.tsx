import React from 'react';

import { Container, Navigation, DropBoxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
    function handleToggle() {
      if(window.toogleActiveMenu) window.toogleActiveMenu();
    }
  
  return (
    <Container>
       <Navigation>
         <h1>
           <DropBoxLogo/>
           <span>DropBox</span>
         </h1>

         <button className="action--close" onClick={handleToggle}>✕</button>
       </Navigation>

       <Form>
          <span className="title">Registre-se</span>
          <span className="subtitle">preencha o formulario abaixo</span>

          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="email" placeholder="E-mail" />
          <input type="passaword" placeholder="Senha" />

          <button type="submit">Prosseguir</button>
          <span className="terms">Esta pagina esta sujeita à Política de privacidade  e Termos de serviços</span>
       </Form>
    </Container>
  );
}

export default MenuForm;