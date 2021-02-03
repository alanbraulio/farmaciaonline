import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Carregamento from '../GeneralComponents/Carregamento';

import { getAuthentication } from "../services/auth";

import { Store } from '../Infrastructure/Store/Store';
import { doGetUser, doGetAllUsers } from '../Infrastructure/Actions/User';


function PrivateRoute (props) {
  const {state, dispatch } = React.useContext(Store);
  const [, setUserAtual] = useState(null);
  const [authentication, setAuthentication] = useState(null);

  useEffect(() => {
    async function fetchData(){
    setUserAtual(state.user);
    }
    fetchData();
  },[state]);

  useEffect(() => {
    async function fetchData(){
    const authentication = await getAuthentication();
    setAuthentication(authentication);

    if(authentication !== false){
      doGetAllUsers(dispatch);
      doGetUser(dispatch, authentication);
      setUserAtual(state.user);
    }
  }
    fetchData();
  },[]);


  if(authentication) return <Route {...props}/>;

  else if(authentication === null || authentication === false) return <Carregamento/>
    };

  
  export default PrivateRoute;