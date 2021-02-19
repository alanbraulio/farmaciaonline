import React, { useState, useEffect } from "react";
import styles from "./ListarMedicos.module.css";
import { Store } from "../../../Infrastructure/Store/Store";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { doGetAllUsers } from "../../../Infrastructure/Actions/User";

const ListarMedicos = () => {
  const { state, dispatch } = React.useContext(Store);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    doGetAllUsers(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setUsers(state.allUsers);
  }, [state.allUsers]);

  function cropTagName(name) {
    if (name.length > 18) {
      let newString = name.substring(0, 18);
      return newString + "...";
    } else {
      return name;
    }
  }

  function mapUsers() {
    return users.map((user) => {
      <>
        <Td className={styles.td}>{user.name}</Td>
        <Td className={styles.td}>{user.email}</Td>
        <Td className={styles.td}>{user.position}</Td>
      </>;
    });
  }

  return (
    <Paper elevation={5}>
      <Typography component="h1" className={styles.heading} variant="h5">
        Médicos
      </Typography>
      {state.allUsers ? (
        <Table className={styles.table}>
          <Thead>
            <Tr>
              <Th className={styles.th}>Name</Th>
              <Th className={styles.th}>Email</Th>
              <Th className={styles.th}>Posição</Th>
            </Tr>
          </Thead>
          {mapUsers()}
        </Table>
      ) : (
        <Typography component="h2" className={styles.SubHeading} variant="h5">
          Não há médicos na plataforma
        </Typography>
      )}
      {mapUsers()}
    </Paper>
  );
};

export default ListarMedicos;
