import React from 'react';
import {Store} from '../../Infrastructure/Store/Store';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import styles from './Dashboard.module.css';

const MenuDashboard = () => {

  const { state } = React.useContext(Store);

  function renderMenuAdmin(){
    if(state.user.position === 'Administrador'){
      return(
        <>
          <Link className={styles.login} to="/lista-medicos">Lista de Médicos</Link>
          <Link className={styles.login} to="/lista-farmaceuticos">Lista de Farmacêuticos</Link>
          <Link className={styles.login} to="/lista-pacientes">Lista de Pacientes</Link>
          <Link className={styles.login} to="/lista-receitas">Lista de Receitas</Link>
          <Link className={styles.login} to="/receitas-validadas">Lista de Receitas Validadas</Link>
        </>
      )
    }
  }

  function renderMenuFarmaceuticos(){
    if(state.user.position === 'Farmacêutico'){
      return(
        <>
          <Link className={styles.login} to="/lista-farmaceuticos">Lista de Farmacêuticos</Link>
          <Link className={styles.login} to="/lista-pacientes">Lista de Pacientes</Link>
          <Link className={styles.login} to="/lista-receitas">Validar Receitas</Link>
          <Link className={styles.login} to="/receitas-validadas">Lista de Receitas Validadas</Link>
        </>
      )
    }
  }

  function renderMenuMedicos(){
    if(state.user.position === 'Médico'){
      return(
        <>
          <Link className={styles.login} to="/lista-receitas">Criar nova Receita</Link>
          <Link className={styles.login} to="/lista-farmaceuticos">Lista de Médicos</Link>
          <Link className={styles.login} to="/lista-pacientes">Cadastrar Paciente</Link>
          <Link className={styles.login} to="/lista-pacientes">Lista de Pacientes</Link>
          <Link className={styles.login} to="/receitas-validadas">Lista de Receitas Criadas</Link>
        </>
      )
    }
  }

  return(
    <>

        {
          state.user &&
          <>
          <nav>
            <ul>
              <li>      
                <Link className={styles.login} to="/dashboard">
                  Home  
                </Link>
              </li>
              <li>
                {renderMenuAdmin()}
              </li>
              <li>
                {renderMenuFarmaceuticos()}
              </li>
              <li>
                {renderMenuMedicos()}
              </li>
              <li>      
                <Link className={styles.login} to="/" onClick={logout}>
                  Sair  
                </Link>
              </li>
            </ul>
          </nav>
          </>
        }
      
    </>
  );
};

export default MenuDashboard;