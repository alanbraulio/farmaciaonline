import api from '../../services/api';

export const repoGetUser = (userId) => {

  return new Promise(async (resolve, reject) => {
      await api.get('/api/user/' + userId)
        .then(async res => {
          resolve(res.data)
          return res.data;
        }).catch((error) => {
              console.log('error', error)
              reject(error);
        });
  });
};

export const doGetAllUsers = () => {

  return new Promise((resolve, reject) => {
    api.get('/api/user/')
    .then(async res => {
      resolve(res.data)
      return res.data;
    }).catch((error) => {
      reject(error);
    });
  });
  
};

export const repoCreateUser = (userInfos) => {

  return new Promise(async (resolve, reject) => {
   await api.post('/api/user/', userInfos)
    .then(async res => {
      resolve(res.data)
      return res.data;
    }).catch((error) => {
      reject(error);
    });
  });
  
};

export const repoDeleteUser = (userId) => {

  return new Promise((resolve, reject) => {
    api.put(`/api/user/${userId}`)
    .then(async res => {
      resolve(res.data)
      return res.data;
    }).catch((error) => {
      reject(error);
    });
  });
  
};