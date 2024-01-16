import { createContext, useEffect, useState } from 'react';

const Context = createContext();

function Provider({ children }) {
    
    const [urlApi] = useState("https://dj.inexoplast.uz/api");

    const [auth_token, setAuth_token] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.localStorage.getItem('auth_token') || '';
        }
        return '';
    });

    
    useEffect(() => {
        if (typeof window !== 'undefined' && auth_token !== '') {
            window.localStorage.setItem('auth_token', auth_token);
        }
    }, [auth_token]);

    return (
        <Context.Provider value={{ urlApi, auth_token, setAuth_token }}>
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };