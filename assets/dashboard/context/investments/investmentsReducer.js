const profileReducer = (state = { userInvestments: [], investmentOpportunities: [] }, action) => {
    switch(action.type) {
      case 'SET_USER_INVESTMENTS': {
        return {
          ...state,
          userInvestments: action.payload
        }
      }
      case 'SET_INVESTMENT_OPPORTUNITIES': {
        return {
          ...state,
          investmentOpportunities: action.payload
        }
      }
      default:
        return state
    }
  }
  
  export default profileReducer