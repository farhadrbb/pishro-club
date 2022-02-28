import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { put, takeLatest } from "redux-saga/effects";
// import { getUserByToken } from "./authCrud";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  SetUser: "[Set User] Action",
};

const initialAuthState = {
  user: undefined

  // userInfo: undefined,
};

export const reducer = persistReducer(
  { storage, key: "auth", whitelist: ["user"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { user } = action.payload;        
        return { user };
      }

      // case actionTypes.Register: {
      //   const { authToken } = action.payload;

      //   return { authToken, user: undefined };
      // }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.

        return {
          user:undefined,
          _persist: {version: -1, rehydrated: true}}
      }

      
      // case actionTypes.UserLoaded: {
      //   const { user } = action.payload;
      //   return { ...state, user };
      // }

      // case actionTypes.SetUser: {
      //   const { user } = action.payload;
      //   return { ...state, user };
      // }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (user) => ({ type: actionTypes.Login, payload: { user } }),
  // register: (authToken) => ({
  //   type: actionTypes.Register,
  //   payload: { authToken },
  // }),
  // logout: () => ({ type: actionTypes.Logout }),
  // requestUser: (user) => ({
  //   type: actionTypes.UserRequested,
  //   payload: { user },
  // }),
  fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  // setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
};

export function* saga() {
  // yield takeLatest(actionTypes.Login, function* loginSaga() {
  //   yield put();
  //   // yield put(actions.requestUser());
  // });

  // yield takeLatest(actionTypes.Register, function* registerSaga() {
  //   yield put(actions.requestUser());
  // });

  // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
  //   const { data: user } = yield getUserByToken();

  //   yield put(actions.fulfillUser(user));
  // });
}
