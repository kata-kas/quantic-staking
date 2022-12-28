import React, { createContext, useReducer } from 'react'
import ProfileReducer from './profileReducer'
import axios from 'axios'
import { USER_TAG } from '../../config/localStorage'
import { USER_ENTRYPOINT } from '../../config/endpoints'

const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const initialState = {
    profile: null
  }

  const [state, dispatch] = useReducer(ProfileReducer, initialState)

  const getUserByEmail = async() => {
    const email = JSON.parse(localStorage.getItem(USER_TAG));
    const users = await axios
      .get(`${USER_ENTRYPOINT}?page=1&email=${email}`)
      .then(response => response.data)
      .catch(e => console.log(`[GET_USER] ${e.message}`))

    if(users['hydra:member'].length)
    dispatch({type: 'SET_PROFILE', payload: users['hydra:member'][0]});
  }

  React.useEffect(() => {
    getUserByEmail();
  }, [])

  return <ProfileContext.Provider value={{
    profile: state.profile
  }}>
    {children}
  </ProfileContext.Provider>
}

export default ProfileContext