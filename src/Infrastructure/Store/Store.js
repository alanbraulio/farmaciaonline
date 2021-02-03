import React, {
  createContext, useReducer, useContext,
} from 'react';
import PropTypes from 'prop-types';

const initialState = {
  user: null,
  newUser: null,
  allUsers: null,
  message: {message: null, type: null},
  token: '',
};

export const Store = createContext(initialState);

export const useAppContext = () => useContext(Store);

export function reducer(state, action) {

  switch (action.type) {
    case 'USER':
      return {
        ...state,
        user: action.payload
      }
    case 'ANOTHER_USER':
      return {
        ...state,
        anotherUser: action.payload
      };
    case 'ALL_USERS':
      return {
        ...state,
        allUsers: action.payload
    };
    case 'CREATE_USER':
      return {
        ...state,
        newUser: action.payload.newUser,
        allUsers: action.payload.allUsers,
    };
    
    case 'REQUEST_ERROR': {
      return {
        ...state,
        message: {message: action.payload, type: "error"}
      }
    }
    default:
      return { ...state };
}
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const { children } = props;
  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};