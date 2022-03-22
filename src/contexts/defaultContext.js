import { useContext, useState } from "react";

const defaultContext = createContext();

export function defaultProvider({children}){

    const [defaultSelect, setdefaultSelect] = useState([]);

    return(
        <defaultContext.Provider value={{defaultSelect, setdefaultSelect}}>
            {children}
        </defaultContext.Provider>
    )
}

export default defaultContext;