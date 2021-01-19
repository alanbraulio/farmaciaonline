import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import CustomButton  from '../Forms/CustomButton/CustomButton';
import {LoginFormContent} from './Styles';

const LoginForm = () => {
  return (
    <LoginFormContent className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="form">
        <Input label="Usuário" type="text" name="username"  />
        <Input label="Senha" type="password" name="password" />
          <CustomButton>Entrar</CustomButton>
      </form>
      <Link className="perdeu" to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className="cadastro">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="buttonCadastro" to="/login/criar">
          Cadastro
        </Link>
      </div>
    </LoginFormContent>
  );
};

export default LoginForm;
