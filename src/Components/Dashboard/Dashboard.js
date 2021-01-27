import React from 'react';
import {Store} from '../../Infrastructure/Store/Store';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';
import styles from './Dashboard.module.css';

const Dashboard = () => {

  const {state} = React.useContext(Store);
  
  return(
    <>
      <div>
        Dashboard
        {
          state.user &&
        <Link className={styles.login} to="/" onClick={logout}>
          Sair  
        </Link>
        }
      </div>
    </>
  );
};

export default Dashboard;