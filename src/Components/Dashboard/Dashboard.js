import React from 'react';
import {Store} from '../../Infrastructure/Store/Store';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import  MenuDashboard  from './MenuDashboard';

const Dashboard = () => {

  const { state } = React.useContext(Store);
  

  return(
    <>
      <MenuDashboard/>
      <div>
        Dashboard
      </div>
    </>
  );
};

export default Dashboard;