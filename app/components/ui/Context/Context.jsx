import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [urlApi] = useState("http://fullstackyordam.uz/api")

    const [auth_token, setAuth_token] = useState(() => {
        const auth_token = typeof window !== 'undefined' ? window.sessionStorage.getItem('auth_token') : null;
        return auth_token ? auth_token : '';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('auth_token', auth_token);
        }
    }, [auth_token]);

    return (
        <Context.Provider value={{ urlApi, auth_token, setAuth_token}}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider } 