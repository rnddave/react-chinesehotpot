import { createContext, useState } from "react";

// the 'ACTUAL' value we want to access
export const UserContext = createContext({
    // context needs a value as well
    // this should be a null value for the empty state (an empty object still evaluate as true)
    currentUser: null,

    // what is the default value? 
    // we just want to return null, so if no user, then set state to null
    setCurrentUser: () => null,
});

// provider is like a wrapper around the components that need access to this state
export const UserProvider = ({ children }) => {
    
    // current user stores the actual value and the setter function (initialised as null)
    const [currentUser, setCurrentUser] = useState(null);
    // but now we want to pass the important VALUE's (current user and the set() current user)
    const value = { currentUser, setCurrentUser};

    // any children can access values inside the useState() 
    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
};


/*
So this userProvider needs to be wrapped around whatever components need access to it. We can do this from the index.js

currently:

  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>

change it to 

  <React.StrictMode>
    <BrowserRouter>
    
        // this is the new bit !!
        <UserProvider>
            <App />
        </UserProvider>

    </BrowserRouter>
  </React.StrictMode>
*/