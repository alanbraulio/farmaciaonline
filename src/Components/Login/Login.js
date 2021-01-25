import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm  from './LoginForm';
import Cadastro from '../Cadastro/Cadastro';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <p>Oi Ui</p>
          <Route path="criar" element={<Cadastro />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
