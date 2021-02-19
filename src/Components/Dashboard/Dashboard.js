import React, { useState } from 'react';
import {Store} from '../../Infrastructure/Store/Store';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import styles from './Dashboard.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListarMedicos  from '../AdminComponents/Medicos/ListarMedicos';
import AdicionarMedico  from '../AdminComponents/Medicos/AdicionarMedico';
import AdicionarFarmaceutico  from '../AdminComponents/Farmaceuticos/AdicionarFarmaceutico';


const Dashboard = () => {
  const { state } = React.useContext(Store);
  const [listarMedicos, setListarMedicos] = useState(false);
  const [adicionarMedico, setAdicionarMedico] = useState(false);
  const [adicionarFarmaceutico, setAdicionarFarmaceutico] = useState(false);

  function onClickLogo(){
    setListarMedicos(false);
    setAdicionarMedico(false);
    setAdicionarFarmaceutico(false);
  }
  function optionsMenu(){
    switch (state.user.position) {
      case 'Administrador':
        return(
          <>
          <ul className={styles.menu}>
            <li>
              <span className={styles.login}>Médicos</span>
              <ul>
                  <li><span className={styles.login} onClick={onClickListarMedicos}>Lista de Médicos</span></li>
                  <li><span className={styles.login} onClick={onClickAdicionarMedico}>Criar Novo Médico</span></li>
              </ul>
            </li>
            <li>
            <span className={styles.login}>Farmacêuticos</span>
              <ul>
                  <li><span className={styles.login}>Lista de farmacêuticos</span></li>
                  <li><span className={styles.login} onClick={onClickAdicionarFarmaceutico}>Criar Novo farmaceutico</span></li>
              </ul>
            </li>
            <li></li>
          </ul>
          
            {/* <Link className={styles.login} to="/lista-medicos">Lista de Médicos</Link>
            <Link className={styles.login} to="/lista-farmaceuticos">Lista de Farmacêuticos</Link>
            <Link className={styles.login} to="/lista-pacientes">Lista de Pacientes</Link>
            <Link className={styles.login} to="/lista-receitas">Lista de Receitas</Link>
            <Link className={styles.login} to="/receitas-validadas">Lista de Receitas Validadas</Link> */}
          </>
        );
      case 'Farmacêutico':
        return(
          <>
            <Link className={styles.login} to="/lista-farmaceuticos">Lista de Farmacêuticos</Link>
            <Link className={styles.login} to="/lista-pacientes">Lista de Pacientes</Link>
            <Link className={styles.login} to="/lista-receitas">Validar Receitas</Link>
            <Link className={styles.login} to="/receitas-validadas">Lista de Receitas Validadas</Link>
          </>
        )
      case 'Médico':
        return(
          <>
            <Link className={styles.login} to="/lista-receitas">Criar nova Receita</Link>
            <Link className={styles.login} to="/lista-farmaceuticos">Lista de Médicos</Link>
            <Link className={styles.login} to="/lista-pacientes">Cadastrar Paciente</Link>
            <Link className={styles.login} to="/lista-pacientes">Lista de Pacientes</Link>
            <Link className={styles.login} to="/receitas-validadas">Lista de Receitas Criadas</Link>
          </>
        )
      default:
        break;
    }
  }

  function renderMenu(){
    return(
      <>
        {
          state.user &&
          <>
              <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                  <h2 onClick={onClickLogo}>PHARMACY</h2>
                  {/* <MenuIcon /> */}
                </IconButton>

                <Typography variant="h6" className={styles.title}>
                  {optionsMenu()}
                </Typography>

                <p style={{margin:'0 1em'}}>Olá {state.user.name}!</p>
                <Button variant="outlined" onClick={logout}><Link to ="/" style={{color:'#fff'}}>Sair</Link></Button>
              </Toolbar>
            </AppBar>
    
          </>
        }
      </>
    
    );
  }
  function onClickListarMedicos(){
    setListarMedicos(true);
    setAdicionarMedico(false);
    setAdicionarFarmaceutico(false);
  }

  function onClickAdicionarMedico(){
    setListarMedicos(false);
    setAdicionarMedico(true);
    setAdicionarFarmaceutico(false);
  }

  function onClickAdicionarFarmaceutico(){
    setListarMedicos(false);
    setAdicionarMedico(false);
    setAdicionarFarmaceutico(true);
  }

  function renderListarMedicos(){
    return(
      <ListarMedicos/>
    )
  }

  function renderAdicionarMedico(){
    return(
      <AdicionarMedico/>
    )
  }
  function renderAdicionarFarmaceutico(){
    return(
      <AdicionarFarmaceutico/>
    )
  }
  return(
    <>
      {renderMenu()}
      {
        listarMedicos &&
        renderListarMedicos()
      }
      {
        adicionarMedico &&
        renderAdicionarMedico()
      }
      {
        adicionarFarmaceutico &&
        renderAdicionarFarmaceutico()
      }
    </>
  
  );
};

export default Dashboard;