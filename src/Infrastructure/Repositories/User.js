import api from "../../services/api";

export const repoGetUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    await api
      .get("/api/user/" + userId)
      .then(async (res) => {
        resolve(res.data.value[0]);
        return res.data.value[0];
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
};

export const doGetAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    await api
      .get("/api/user/")
      .then(async (res) => {
        resolve(res.data.value);
        return res.data.value;
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const repoCreateUser = (userInfos) => {
  return new Promise(async (resolve, reject) => {
    let response = null;
    await api
      .post("/api/user/", userInfos)
      .then(async (res) => {
        resolve(res);
        return res;
      })
      .catch((error) => {
        response = error.response.data;
      })
      .finally(() => {
        resolve(response);
        return response;
      });
  });
};

export const repoDeleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    api
      .put(`/api/user/${userId}`)
      .then(async (res) => {
        resolve(res.data);
        return res.data;
      })
      .catch((error) => {
        reject(error);
      });
  });
};
