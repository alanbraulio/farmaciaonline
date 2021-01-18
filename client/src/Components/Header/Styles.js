import styled from 'styled-components'


export const HeaderApp = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;

  nav {
    display: flex;
    align-items: center;
    height: 4rem;
  }


  .login {
    color: #333;
    display: flex;
    align-items: center;
  }

  .login::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url('../Assets/usuario.svg') no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
  `
export const TextHeader = styled.div`
  color: orange;
  padding: 1rem;

`