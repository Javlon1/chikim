import { createContext, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("http://localhost:3000/api")

    return (
        <Context.Provider value={{ url }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider } 