import { createContext, useState } from "react";
import { pagesList } from "../pages/Timeline/utils";

const PageContext = createContext();

export function PageProvider({children}){

    // if(localStorage.getItem("page") === 'undefined'){
    //     localStorage.clear();
    // }
    //const persistedPage = JSON.parse(localStorage.getItem("page"));
    //const [page, setPage] = useState(persistedPage);

    const [page, setPage] = useState(-1);
    const [reload, setReload] = useState(false);

    function pageUsername(pageData){
        setPage(pageData);
        localStorage.setItem("page", JSON.stringify(pageData));
    }
    function setPageAndReload(page = undefined) {
        if (page !== undefined) {
          setPage(page);
        }
        setReload(!reload);
    }
    function getPage(location) {
        const name = location.pathname.split("/")[1];
        return pagesList[name];
    }


    const timeLine = {
        page,
        reload,
        setPageAndReload,
        getPage,

    }

    return(
        <PageContext.Provider value={{page, pageUsername, timeLine}}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;