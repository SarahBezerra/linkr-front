import { createContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({children}){

    if(localStorage.getItem("page") === 'undefined'){
        localStorage.clear();
    }

    const persistedPage = JSON.parse(localStorage.getItem("page"));
    const [page, setPage] = useState(persistedPage);

    function pageUsername(pageData){
        setPage(pageData);
        localStorage.setItem("page", JSON.stringify(pageData));
    }

    return(
        <PageContext.Provider value={{page, pageUsername}}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;