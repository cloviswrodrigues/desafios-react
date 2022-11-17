import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [ loading, setLoading ] = React.useState(false);

    function activeLoading(){
        setLoading(true)
    }

    function disabledLoading(){
        setLoading(false)
    }

    return (
        <GlobalContext.Provider value={{ loading, activeLoading, disabledLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}