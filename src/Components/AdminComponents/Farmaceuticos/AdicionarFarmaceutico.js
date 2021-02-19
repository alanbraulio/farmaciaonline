import React, { useState, useEffect } from "react";
import styles from "./AdicionarFarmaceutico.module.css";
import { Store } from "../../../Infrastructure/Store/Store";
import {
  doGetAllUsers,
  doCreateUser,
} from "../../../Infrastructure/Actions/User";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/CustomButton/CustomButton";
import CustomSnackbar from '../../../GeneralComponents/Snackbar';

const ListarMedicos = () => {
  const { state, dispatch } = React.useContext(Store);
  const [user, setUser] = useState([{
    name: "",
    email: "",
    password: "",
    crf: "crf",
    cep: "",
    endereco: "",
    active: "",
  }]);
  const [abreNotificacao, setAbreNotificacao] = useState(false);
  const [resultadoRequisicao, setResultadoRequisicao] = useState("success");
  const [mensagemDeResultado, setMensagemDeResultado] = useState('');

  useEffect(() => {
    doGetAllUsers(dispatch);
  }, [dispatch]);


  const changeUser = (event) => {
    switch(event.target.name) {
        case "name":
            return setUser({name: event.target.value, email:user.email, password: user.password, crf: user.crf, cep: user.cep, endereco: user.endereco, active: user.active})
        case "email":
            return setUser({name: user.name, email:event.target.value, password: user.password, crf: user.crf, cep: user.cep, endereco: user.endereco, active: user.active})
        case "password":
            return setUser({name: user.name, email:user.email, password: event.target.value, crf: user.crf, cep: user.cep, endereco: user.endereco, active: user.active}) 
        case "crf":
            return setUser({name: user.name, email:user.email, password: user.password, crf: event.target.value, cep: user.cep, endereco: user.endereco, active: user.active});
        case "cep":
            return setUser({name: user.name, email:user.email, password: user.password, crf: user.crf, cep: event.target.value, endereco: user.endereco, active: user.active});
        case "endereco":
            return setUser({name: user.name, email:user.email, password: user.password, crf: user.crf, cep: user.cep, endereco: event.target.value, active: user.active});
        case "active":
            return setUser({name: user.name, email:user.email, password: user.password, crf: user.crf, cep: user.cep, endereco: user.endereco, active: event.target.value});
            default:
        break;
    }
};

  async function handleRegisterPharmaceutical(e) {
    e.preventDefault();
    const dataUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      position: "Farmacêutico",
      crf: user.crf,
      cep: user.cep,
      endereco: user.endereco,
      active: user.active,
    };
    try {
      await doCreateUser(dispatch, dataUser).then(
        async (res) => {
          setUser({
            name: "",
            email: "",
            password: "",
            crf: "",
            cep: "",
            endereco: "",
            telefone:"",
            active: "",
          });
          if (res.status === 201) {
            abrirNotificacao(res.data.message, "success");
          } else {
            abrirNotificacao(res.data.message, "error");
          }
        }
      );
    } catch {
      abrirNotificacao("Erro ao cadastrar Farmacêutico!", "error");
    }
  }

  

  function renderFormFields() {
    return (
      <form onSubmit={handleRegisterPharmaceutical}>
        <div className={styles.content}>
          <div className={styles.twoLines}>
            <Input
              label="Name"
              type="text"
              name="name"
              required="required"
              onChange={changeUser}
              value={user.name}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              required="required"
              onChange={changeUser}
              value={user.email}
            />
          </div>
          <div className={styles.twoLines}>
            <Input
              label="crf"
              type="text"
              name="crf"
              required="required"
              onChange={changeUser}
              value={user.crf}
            />
            <Input
              label="CEP"
              type="text"
              name="cep"
              required="required"
              onChange={changeUser}
              value={user.cep}
            />
          </div>
          <Input
            label="Endereço completo(Com número e complemento se houver)"
            type="text"
            name="endereco"
            onChange={changeUser}
            value={user.endereco}
          />
          <div className={styles.twoLines}>
            <Input
              label="Data de nascimento"
              type="date"
              name="datanascimento"
            />
            <Input
              label="Telefone"
              type="text"
              name="telefone"
              required="required"
              onChange={changeUser}
              value={user.telefone}
            />
          </div>
          <div className={styles.twoLines}>
            <Input
              label="Senha"
              type="text"
              name="password"
              required="required"
              onChange={changeUser}
              value={user.password}
            />
            <select
              name="active"
              className={styles.select}
              value={user.active}
              onChange={changeUser}
            >
              <option disabled selected value="">
                Usuário ativo?
              </option>
              <option value="1">Sim</option>
              <option value="0">Não</option>
            </select>
          </div>

          <Button>Cadastrar</Button>
        </div>
      </form>
    );
  }

  function fecharNotificacao(){
    setAbreNotificacao(false);
  };

  function abrirNotificacao(mensagemDeResultado, resultadoRequisicao){
    setAbreNotificacao(true);
    setResultadoRequisicao(resultadoRequisicao);
    setMensagemDeResultado(mensagemDeResultado);
  }
    

  return (
    <div className="container">
       <CustomSnackbar 
        abreNotificacao={abreNotificacao}
        fecharNotificacao={fecharNotificacao}
        mensagemDeResultado={mensagemDeResultado}
        resultadoRequisicao={resultadoRequisicao}
      />
      <h2 style={{ marginTop: "1em" }}>Cadastrar farmacêutico</h2>
      {renderFormFields()}
    </div>
  );
};

export default ListarMedicos;
