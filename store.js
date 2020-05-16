import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const storeInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  form: {
    fullName: "",
    email: "",
    password: "",
  },
  exampleData: [],
  error: null,
};
export const actionTypes = {
  Submit: "Submit",

  RESET: "RESET",
};

// REDUCERS
export const reducer = (state = storeInitialState, action) => {
  switch (action.type) {
    case actionTypes.Submit:
      return Object.assign({}, state, {
        form: action.form,
      });

    case actionTypes.RESET:
      return Object.assign({}, state, {
        form: storeInitialState.form,
      });

    default:
      return state;
  }
};
export const SubmitForm = (data) => {
  return { type: actionTypes.Submit, data };
};

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["form"], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

export function initializeStore(initialState = storeInitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
