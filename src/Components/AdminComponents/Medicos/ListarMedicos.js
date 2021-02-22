import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { format } from "date-fns";

import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import Delete from "@material-ui/icons/Delete";
import { Paper } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import { Store } from "../../../Infrastructure/Store/Store";
import {
  doGetAllUsers,
  doDeleteUser,
} from "../../../Infrastructure/Actions/User";

import Button from "../../Forms/CustomButton/CustomButton";
import CustomSnackbar from "../../../GeneralComponents/Snackbar";

import styles from "./ListarMedicos.module.css";

const ListarMedicos = () => {
  const { state, dispatch } = React.useContext(Store);
  const [user, setUser] = useState(null);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalExclude, setOpenModalExclude] = useState(false);

  useEffect(() => {
    doGetAllUsers(dispatch);
  }, [dispatch]);

  const [abreNotificacao, setAbreNotificacao] = useState(false);
  const [resultadoRequisicao, setResultadoRequisicao] = useState("success");
  const [mensagemDeResultado, setMensagemDeResultado] = useState("");

  function fecharNotificacao() {
    setAbreNotificacao(false);
  }

  function abrirNotificacao(mensagemDeResultado, resultadoRequisicao) {
    setAbreNotificacao(true);
    setResultadoRequisicao(resultadoRequisicao);
    setMensagemDeResultado(mensagemDeResultado);
  }

  function cropTagName(name) {
    if (name.length > 18) {
      let newString = name.substring(0, 18);
      return newString + "...";
    } else {
      return name;
    }
  }

  function formatDDMMYYYY(date) {
    let data = new Date(date);
    data.setDate(data.getDate() + 1);
    var result = format(data, "dd-MM-yyyy");
    return result;
  }

  function handleOpenModalInfo(userInfo) {
    setOpenModalInfo(true);
    setUser(userInfo);
  }

  function handleCloseModalInfo() {
    setOpenModalInfo(false);
    setUser(null);
  }

  function handleModalInfo() {
    return (
      <Modal open={openModalInfo} onClose={handleCloseModalInfo}>
        <div className={styles.modal}>
          <div className="content" style={{textAlign:'center'}}>
            <h2 style={{margin:'1em 0'}}>{user.name}</h2>
            <div className={styles.grid}>
              <div>
                <span className={styles.title}>Nome:</span>
                <p className={styles.info}>{user.name}</p>
              </div>
              <div>
                <span className={styles.title}>Email:</span>
                <p className={styles.info}>{user.email}</p>
              </div>
              <div>
                <span className={styles.title}>CRM:</span>
                <p className={styles.info}>{user.crm}</p>
              </div>
              <div>
                <span className={styles.title}>Data de Nascimento:</span>
                <p className={styles.info}>
                  {formatDDMMYYYY(user.dataNascimento)}
                </p>
              </div>
              <div>
                <span className={styles.title}>Especialidade:</span>
                <p className={styles.info}>{user.especialidade}</p>
              </div>
              <div>
                <span className={styles.title}>Telefone:</span>
                <p className={styles.info}>{user.telefone}</p>
              </div>
              <div>
                <span className={styles.title}>Celular:</span>
                <p className={styles.info}>{user.celular}</p>
              </div>
              <div>
                <span className={styles.title}>CPF:</span>
                <p className={styles.info}>{user.cpf}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  function handleOpenModalExclude(userInfo) {
    setOpenModalExclude(true);
    setUser(userInfo);
  }

  function handleCloseModalExclude() {
    setOpenModalExclude(false);
    setUser(null);
  }

  function handleModalExclude() {
    return (
      <Modal open={openModalExclude} onClose={handleCloseModalExclude}>
        <div className={styles.modal}>
          <div className="content">
            <h2>Você tem certeza que deseja apagar {user.name}?</h2>

            <div className={styles.twoLines}>
              <Button
                style={{ marginTop: "1em" }}
                onClick={() => setOpenModalExclude(false)}
              >
                Cancelar
              </Button>
              <Button
                style={{ marginTop: "1em" }}
                onClick={() => handleDeleteUser()}
              >
                Apagar
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  function handleDeleteUser() {
    doDeleteUser(dispatch, user.id).then(async (res) => {
      if (res.status === 200) {
        abrirNotificacao(res.data.message, "success");
      } else {
        abrirNotificacao(res.data.message, "error");
      }
      setOpenModalExclude(false);
      setUser(null);
      doGetAllUsers(dispatch);
    });
  }

  function mapUsers() {
    return state.allUsers.map((user) => {
      if (user.position === "Médico") {
        return (
          <Tr className={styles.row} key={user.id}>
            <Td className={styles.td}>{cropTagName(user.name)}</Td>
            <Td className={styles.td}>{user.email}</Td>
            <Td className={styles.td}>{user.especialidade}</Td>
            <Td className={styles.td}>
              <div>
                <Visibility
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOpenModalInfo(user)}
                />
                <Delete
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOpenModalExclude(user)}
                />
              </div>
            </Td>
          </Tr>
        );
      }
    });
  }

  return (
    <Paper elevation={5}>
      <CustomSnackbar
        abreNotificacao={abreNotificacao}
        fecharNotificacao={fecharNotificacao}
        mensagemDeResultado={mensagemDeResultado}
        resultadoRequisicao={resultadoRequisicao}
      />
      <Typography component="h1" className={styles.heading} variant="h5">
        Médicos
      </Typography>
      {state.allUsers ? (
        <Table className={styles.table}>
          <Thead>
            <Tr>
              <Th className={styles.th}>Name</Th>
              <Th className={styles.th}>Email</Th>
              <Th className={styles.th}>Especialidade</Th>
              <Th className={styles.th}>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>{mapUsers()}</Tbody>
        </Table>
      ) : (
        <Typography component="h2" className={styles.SubHeading} variant="h5">
          Não há médicos na plataforma
        </Typography>
      )}
      {openModalInfo && handleModalInfo()}
      {openModalExclude && handleModalExclude()}
    </Paper>
  );
};

export default ListarMedicos;
