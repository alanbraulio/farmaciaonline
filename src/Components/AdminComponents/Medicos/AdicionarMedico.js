import React, { useState, useEffect } from "react";

import { Store } from "../../../Infrastructure/Store/Store";
import {
  doGetAllUsers,
  doCreateUser,
} from "../../../Infrastructure/Actions/User";

import Input from "../../Forms/Input/Input";
import Button from "../../Forms/CustomButton/CustomButton";
import CustomSnackbar from "../../../GeneralComponents/Snackbar";

import styles from "./AdicionarMedico.module.css";
import { useRadioGroup } from "@material-ui/core";

const AdicionarMedico = () => {
  const { dispatch } = React.useContext(Store);
  const [user, setUser] = useState([
    {
      name: "",
      email: "",
      password: "",
      crm: "",
      especialidade: "",
      cep: "",
      endereco: "",
      dataNascimento: "",
      cpf: "",
      celular: "",
      telefone: "",
      active: "",
    },
  ]);
  const [abreNotificacao, setAbreNotificacao] = useState(false);
  const [resultadoRequisicao, setResultadoRequisicao] = useState("success");
  const [mensagemDeResultado, setMensagemDeResultado] = useState("");

  useEffect(() => {
    doGetAllUsers(dispatch);
  }, [dispatch]);

  const formatInputDate = (data) => {
    var result = new Date(data);
    return `${result.getFullYear()}-${`00${result.getMonth() + 1}`.slice(
      -2
    )}-${`00${result.getDate()}`.slice(-2)}`;
  };
  const changeUser = (event) => {
    switch (event.target.name) {
      case "name":
        return setUser({
          name: event.target.value,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
      case "email":
        return setUser({
          name: user.name,
          email: event.target.value,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
      case "password":
        return setUser({
          name: user.name,
          email: user.email,
          password: event.target.value,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
      case "crm":
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: event.target.value,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
        case "especialidade":
          return setUser({
            name: user.name,
            email: user.email,
            password: user.password,
            crm: user.crm,
            especialidade: event.target.value,
            cep: user.cep,
            endereco: user.endereco,
            dataNascimento: user.dataNascimento,
            cpf: user.cpf,
            celular: user.celular,
            telefone: user.telefone,
            active: user.active,
          });
      case "cep":
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: event.target.value,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
      case "endereco":
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: event.target.value,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
      case "dataNascimento":
        let tagText = event.target.value;
        tagText = tagText.replace(/-/g, "/");
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: new Date(`${tagText}`),
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
      case "cpf":
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: event.target.value,
          celular: user.celular,
          telefone: user.telefone,
          active: user.active,
        });
      case "celular":
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: event.target.value,
          telefone: user.telefone,
          active: user.active,
        });
      case "telefone":
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: event.target.value,
          active: user.active,
        });
      case "active":
        return setUser({
          name: user.name,
          email: user.email,
          password: user.password,
          crm: user.crm,
          especialidade: user.especialidade,
          cep: user.cep,
          endereco: user.endereco,
          dataNascimento: user.dataNascimento,
          cpf: user.cpf,
          celular: user.celular,
          telefone: user.telefone,
          active: event.target.value,
        });
      default:
        break;
    }
  };

  async function handleRegisterDoctor(e) {
    e.preventDefault();
    const dataUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      position: "Médico",
      crm: user.crm,
      especialidade: user.especialidade,
      cep: user.cep,
      endereco: user.endereco,
      dataNascimento: user.dataNascimento,
      cpf: user.cpf,
      celular: user.celular,
      telefone: user.telefone,
      active: user.active,
    };
    try {
      await doCreateUser(dispatch, dataUser).then(async (res) => {
        setUser({
          name: "",
          email: "",
          password: "",
          crm: "",
          especialidade: "",
          cep: "",
          endereco: "",
          dataNascimento: "",
          cpf: "",
          telefone: "",
          celular: "",
          active: "",
        });
        if (res.status === 201) {
          abrirNotificacao(res.data.message, "success");
        } else {
          abrirNotificacao(res.data.message, "error");
        }
      });
    } catch {
      abrirNotificacao("Erro ao cadastrar Médico!", "error");
    }
  }

  function renderFormFields() {
    return (
      <form onSubmit={handleRegisterDoctor}>
        <div className={styles.content}>
          <div className={styles.twoLines}>
            <Input
              label="Nome"
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
              label="CRM"
              type="text"
              name="crm"
              onChange={changeUser}
              value={user.crm}
            /> 
            <Input
              label="Especialidade(s)"
              type="text"
              name="especialidade"
              onChange={changeUser}
              value={user.especialidade}
            />
          </div>
          <div className={styles.twoLines}>
            <Input
              label="Data de nascimento"
              type="date"
              name="dataNascimento"
              defaultValue={formatInputDate(user.dataNascimento)}
              onChange={changeUser}
            />
            <Input
              label="CPF"
              type="text"
              name="cpf"
              onChange={changeUser}
              value={user.cpf}
            />
            
          </div>
          <div className={styles.twoLines}>
          <Input
              label="CEP"
              type="text"
              name="cep"
              required="required"
              onChange={changeUser}
              value={user.cep}
            />
          
          <Input
            label="Endereço completo"
            type="text"
            name="endereco"
            onChange={changeUser}
            value={user.endereco}
          />
          </div>
          <div className={styles.twoLines}>
            <Input
              label="Celular"
              type="text"
              name="celular"
              required="required"
              onChange={changeUser}
              value={user.celular}
            />
            <Input
              label="Telefone"
              type="text"
              name="telefone"
              onChange={changeUser}
              value={user.telefone}
            />
          </div>
          <div className={styles.twoLines}>
            <Input
              label="Senha"
              type="password"
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
              <option defaultValue="">Usuário ativo?</option>
              <option value="1">Sim</option>
              <option value="0">Não</option>
            </select>
          </div>

          <Button>Cadastrar</Button>
        </div>
      </form>
    );
  }

  function fecharNotificacao() {
    setAbreNotificacao(false);
  }

  function abrirNotificacao(mensagemDeResultado, resultadoRequisicao) {
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
      <h2 style={{ marginTop: "1em" }}>Cadastrar médico</h2>
      {renderFormFields()}
    </div>
  );
};

export default AdicionarMedico;
