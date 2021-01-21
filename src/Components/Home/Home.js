import React, { useState } from 'react';
import Input from '../Forms/Input/Input';

const Home = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return(

  <div>
      <form>
        <Input type="text" name="username"/>
        <button>{show ? 'Entrar' : 'Sair'}</button>
      </form>
    
  </div>
  );
};

export default Home;