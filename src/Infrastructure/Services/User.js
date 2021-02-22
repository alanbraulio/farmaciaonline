import {
  repoGetUser,
  doGetAllUsers,
  repoCreateUser,
  repoDeleteUser,
} from "../Repositories/User";

export const getUser = async (userId) => {
  try {
    const response = await repoGetUser(userId);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const createUser = async (userInfos) => {
  try {
    const response = await repoCreateUser(userInfos);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await repoDeleteUser(userId);
    return response;
  } catch (error) {
    throw error.response;
  }
};


export const getAllUsers = async () => {
  try {
    const response = await doGetAllUsers();
    return response;
  } catch (error) {
    throw error.response;
  }
};
