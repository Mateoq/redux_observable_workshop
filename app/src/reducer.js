import shortid from 'shortid';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createReducer } from 'redux-create-reducer';

export const REQUEST_LOGIN = 'LOGIN';
export const requestLogin = (username, password) => ({
  type: REQUEST_LOGIN,
  username,
  password
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSucceded = () => ({
  type: LOGIN_SUCCESS
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({
  type: ADD_MESSAGE,
  message
});

export const ADD_MESSAGE_TO_QUEUE = 'ADD_MESSAGE_TO_QUEUE';
export const addMessageToQueue = (message = '') => ({
  type: ADD_MESSAGE_TO_QUEUE,
  message: {
    id: shortid.generate(),
    message
  }
});

export const SHOW_MESSAGES = 'SHOW_MESSAGES';
export const showMessages = () => ({
  type: SHOW_MESSAGES
});

export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';
export const removeMessages = () => ({
  type: REMOVE_MESSAGES
});

export const SHOW_LOADING = 'SHOW_LOADING';
export const showLoading = () => ({
  type: SHOW_LOADING
});

export const HIDE_LOADING = 'HIDE_LOADING';
export const hideLoading = () => ({
  type: HIDE_LOADING
});

export const SHOW_TOAST = 'SHOW_TOAST';
export const showToast = message => ({
  type: SHOW_TOAST,
  message
});

export const HIDE_TOAST = 'HIDE_TOAST';
export const hideToast = () => ({
  type: HIDE_TOAST
});

const initialState = {
  user: {
    auth: false
  },
  toast: {
    show: false,
    message: ''
  },
  loading: false,
  messages: [],
  messagesQueue: []
};

const actionHandlers = {
  [LOGIN_SUCCESS]: state => ({
    ...state,
    user: { auth: true }
  }),
  [ADD_MESSAGE]: (state, action) => ({
    ...state,
    messagesQueue: state.messages.filter(message => (message.id !== action.message.id)),
    messages: [
      ...state.messages,
      action.message
    ]
  }),
  [ADD_MESSAGE_TO_QUEUE]: (state, action) => ({
    ...state,
    messagesQueue: [
      ...state.messagesQueue,
      action.message
    ]
  }),
  [REMOVE_MESSAGES]: state => ({
    ...state,
    messages: [],
    messagesQueue: []
  }),
  [SHOW_LOADING]: state => ({
    ...state,
    loading: true
  }),
  [HIDE_LOADING]: state => ({
    ...state,
    loading: false
  }),
  [SHOW_TOAST]: (state, action) => ({
    ...state,
    toast: {
      show: true,
      message: action.message
    }
  }),
  [HIDE_TOAST]: state => ({
    ...state,
    toast: initialState.toast
  })
};

const app =  createReducer(initialState, actionHandlers);

export default combineReducers({
  router: routerReducer,
  app
});
