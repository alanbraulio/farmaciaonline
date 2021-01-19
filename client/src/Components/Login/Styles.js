import styled from 'styled-components'


export const LoginContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url('../../Assets/login.jpg') no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`

export const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  @media (max-width: 40rem) {
    max-width: 100%;
  }
`

export const LoginFormContent = styled.div`

.form {
  margin-bottom: 2rem;
}

.perdeu {
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;
}

.perdeu::after {
  content: '';
  height: 2px;
  width: 100%;
  background: currentColor;
  display: block;
}

.cadastro {
  margin-top: 4rem;
}

.cadastro p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.subtitle {
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;
}

.subtitle::after {
  content: '';
  display: block;
  background: #ddd;
  height: 0.5rem;
  width: 3rem;
  border-radius: 0.2rem;
}

.buttonCadastro{
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
}

`
