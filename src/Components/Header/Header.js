import React, { useState, useEffect }from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import {getToken, logout} from '../../services/auth';

const Header = () => {
  const [userLogado, setUserLogado] = useState(false);

  useEffect(() => {
    getToken() && setUserLogado(true);
  },[])
  
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          Home
        </Link>
        {userLogado ? 
        <Link className={styles.login} to="/" onClick={logout}>
        Sair  
        </Link>
        :
        <Link className={styles.login} to="/login">
          Login 
        </Link>
        }
        
      </nav>
    </header>
  );
};

export default Header;
