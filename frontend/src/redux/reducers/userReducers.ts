// TODO: Do something about repeated codes
import { Reducer } from "redux";
import {
  IUserDetailsState,
  IUserLoginState,
  IUserRegisterState,
  UserActions,
  UserActionTypes,
} from "../types/userTypes";

const initialUserLoginState: IUserLoginState = {
  loading: false,
  userInfo: null,
  error: "",
};

export const userLoginReducer: Reducer<
  IUserLoginState,
  UserActions
> = (state = initialUserLoginState, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        userInfo: action.payload,
      };

    case UserActionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UserActionTypes.USER_LOGOUT:
      return {
        loading: false,
        error: "",
        userInfo: null,
      };

    default:
      return state;
  }
};

const initialUserRegisterState: IUserRegisterState = {
  loading: false,
  error: "",
  userInfo: null,
};

export const userRegisterReducer: Reducer<
  IUserRegisterState,
  UserActions
> = (state = initialUserRegisterState, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UserActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        userInfo: action.payload,
      };

    case UserActionTypes.USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialUserDetailsState: IUserDetailsState = {
  user: null,
  loading: false,
  error: "",
};

export const userDetailsReducer: Reducer<
  IUserDetailsState,
  UserActions
> = (state = initialUserDetailsState, action) => {
  switch (action.type) {
    case UserActionTypes.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UserActionTypes.USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case UserActionTypes.USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};