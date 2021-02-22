import { getUser, createUser, deleteUser, getAllUsers } from '../Services/User';

export const doGetUser = async (dispatch, userId, currentUser = true) => {
  getUser(userId).then(user => {
    return dispatch({
      type: currentUser ? 'USER' : 'ANOTHER_USER',
      payload: user
    });

  }).catch((error) => {

    return dispatch({
      type: 'REQUEST_ERROR',
      payload: error
    });

  });
};


export const doDeleteUser = async (dispatch, userId) => {
  try{
    return deleteUser(userId)
  }catch(error){
    return dispatch({
    type: 'REQUEST_ERROR',
    payload: error
    });
  }
}

export const doGetAllUsers = async (dispatch) => {
  await getAllUsers().then(users => {
    return dispatch({
      type: 'ALL_USERS',
      payload: users
    });

  }).catch((error) => {
    return dispatch({
      type: 'REQUEST_ERROR',
      payload: error

    });

  });
}

export const doCreateUser = async (dispatch, userInfos) => {
  try{
    return createUser(userInfos)
  }catch(error){
    return dispatch({
      type: 'REQUEST_ERROR',
      payload: error
    });
  }
}
