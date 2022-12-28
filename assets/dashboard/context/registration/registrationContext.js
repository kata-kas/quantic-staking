import React, { createContext, useReducer } from "react";
import registrationReducer from "./registrationReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CUSTOMER_DETAILS_ENTRYPOINT,
  USER_ENTRYPOINT,
  LOGIN_ENTRYPOINT,
} from "../../config/endpoints";
import {
  setRegistrationError,
  setRegistrationSuccess,
} from "./registrationActions";
import { AUTH_TAG, USER_TAG } from "../../config/localStorage";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const navigate = useNavigate();
  const redirectToLogin = () => navigate("/dashboard/login");

  const initialState = {
    activeStepIndex: 1,
    formData: {},
    error: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(registrationReducer, initialState);

  const registrate = async (data) => {
    try {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const responseUser = await axios
        .post(USER_ENTRYPOINT, {
          email: data.email,
          roles: ["ROLE_USER"],
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          dateCreated: today.toISOString(),
        })
        .then((data) => data?.data);

      await axios
        .post(
          CUSTOMER_DETAILS_ENTRYPOINT,
          {
            ...data,
            status: "Pending",
            user: responseUser["@id"],
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((data) => data?.data)
        .then((user) => console.log({ user }));

      const loginResponse = await axios
        .post(LOGIN_ENTRYPOINT, {username: data.email, password: data.password})
        .then(data => data?.data)

      localStorage.removeItem(AUTH_TAG)
      localStorage.setItem(AUTH_TAG, loginResponse.token)

      localStorage.setItem(USER_TAG, JSON.stringify(loginResponse.user))

      dispatch(setRegistrationSuccess());
      navigate('/dashboard/congratulations');
    } catch (err) {
      console.log({ err });
      dispatch(setRegistrationError(err.response?.data?.detail));
    }
  };

  return (
    <RegistrationContext.Provider
      value={{
        activeStepIndex: state.activeStepIndex,
        formData: state.formData,
        redirectToLogin,
        dispatch,
        registrate,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
