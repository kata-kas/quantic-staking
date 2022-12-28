import React, { createContext, useReducer } from "react";
import InvestmentsReducer from "./investmentsReducer";
import axios from "axios";
import {
  REQUEST_ENTRYPOINT,
  STAKING_PLAN_ENTRYPOINT,
} from "../../config/endpoints";
import ProfileContext from "../profile/profileContext";

const InvestmentsContext = createContext();

export const InvestmentsProvider = ({ children }) => {
  const initialState = {
    userInvestments: [],
    investmentOpportunities: [],
  };

  const [state, dispatch] = useReducer(InvestmentsReducer, initialState);
  const { profile } = React.useContext(ProfileContext);

  const getRequestsByUserId = async () => {
    const requests = await axios
      .get(`${REQUEST_ENTRYPOINT}?user=${profile["@id"]}`)
      .then((response) => response.data)
      .catch((e) => console.log(`[GET_REQUESTS] ${e.message}`));

    if (requests["hydra:member"].length)
      dispatch({
        type: "SET_USER_INVESTMENTS",
        payload: requests["hydra:member"],
      });
  };

  const getStakingPlans = async () => {
    const requests = await axios
      .get(STAKING_PLAN_ENTRYPOINT)
      .then((response) => response.data)
      .catch((e) => console.log(`[GET_STAKING_PLANS] ${e.message}`));

    if (requests["hydra:member"].length)
      dispatch({
        type: "SET_INVESTMENT_OPPORTUNITIES",
        payload: requests["hydra:member"],
      });
  };

  React.useEffect(() => {
    if (!profile) return;

    getRequestsByUserId();
    getStakingPlans();

    console.log({ state });
  }, [profile]);

  return (
    <InvestmentsContext.Provider
      value={{
        userInvestments: state.userInvestments,
        investmentOpportunities: state.investmentOpportunities,
      }}
    >
      {children}
    </InvestmentsContext.Provider>
  );
};

export default InvestmentsContext;
