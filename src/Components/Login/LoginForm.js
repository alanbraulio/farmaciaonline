import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import CustomButton from '../Forms/CustomButton/CustomButton';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/CustomButton/CustomButton.module.css';

const LoginForm = () => {

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('oi')
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username"/>
        <Input label="Senha" type="password" name="password" />
          <CustomButton>Entrar</CustomButton>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
