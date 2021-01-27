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
    
    case 'ALL_REWARDS':
      return {
        ...state,
        allRewards: action.payload
      };
    case 'DELETE_REWARD': {
      return {
        ...state,
        allRewards: action.payload.rewards,
      }
    }
    case 'ADD_REWARD': {
      return {
        ...state,
        allRewards: action.payload.rewards,
      }
    }
    case 'UPDATE_REWARD': {
      return {
        ...state,
        allRewards: action.payload.rewards,
      }
    }
    case 'USER_TRADES': {
      return {
        ...state,
        userTrades: action.payload,
      }
    }
    case 'ALL_DEPARTS':
      return {
        ...state,
        allDeparts: action.payload
      }
    case 'ALL_EVENTS':
      return {
        ...state,
        allEvents: action.payload
      }
    case 'TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'BIRTHDAY_MESSAGES':
      return {
        ...state,
        userBirthdayMessages: action.payload
      }
    case 'USER_SEAT_SCHEDULE':
      return {
        ...state,
        userSeatsSchedule: action.payload
      }
    case 'SEATS_SCHEDULE': {
      return{
        ...state,
        seatsSchedule: action.payload
      }
     }
    case 'ALL_HASHTAGS': {
      return {
        ...state,
        allHashtags: action.payload
      };
    }
    case 'ADD_HASHTAG': {
      return {
        ...state,
        allHashtags: action.payload.hashtags,
      }
    }
    case 'LAST_TRANSACTION': {
      return {
        ...state,
        user: {...action.payload.transaction.sender, coins: action.payload.transaction.sender.coins},
        lastTransaction: action.payload.transaction,
        message: {message: action.payload.message, type: 'success'} 
      }
    }
    case 'DELETE_HASHTAG': {
      return {
        ...state,
        allHashtags: action.payload.hashtags,
      }
    }
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