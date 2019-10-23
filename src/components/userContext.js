import React from 'react';

const UserContext = React.createContext('Master') //passing a parameter in createContext gives a PROVIDER LESS COMPONENT a default value if needed

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
// Using Context type property in a class (2nd method)
export default UserContext