import React, { useState ,  useEffect} from 'react';

import { Container } from './styles';

const scroollThreshold = 300;

declare global {
  interface Window{
    toogleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({children}) => {
  
  
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  
  
  useEffect(() => {
    
    function OnScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
      
    }
    
    window.addEventListener('scroll', OnScroll);
    
    
    return () =>   window.removeEventListener('scroll', OnScroll);
    
    
    
  }, [
  ]);
  
  const classes = [
    isActive ? 'open' : '',
    scrollY <= scroollThreshold ? 'scrollOpen' :'',
  ];

  
  
  
  const className = classes.join(' ').trim();

  function toogleActiveMenu() {
     setIsActive(prev => !prev)
  }

  window.toogleActiveMenu = toogleActiveMenu;
  
  
  return   <Container className={className}>{children}</Container> ;
  }
  
  export default SideMenu;