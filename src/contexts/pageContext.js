import { createContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import { pagesList, statesList } from "../pages/Timeline/utils";
import api from "../services/api";

const PageContext = createContext();

export function PageProvider({children}){

     if(localStorage.getItem("pageInfo") === 'undefined'){
         localStorage.clear();
     }
    const persistedPage = JSON.parse(localStorage.getItem("pageInfo"));
    const [page, setPage] = useState(-1);
    const [pageInfo, setPageInfo] = useState(persistedPage);
    const [reload, setReload] = useState(false);
    const [rePosts, setRePosts] = useState([]);
    const { auth } = useAuth();

    function pageUsername(pageData){
        setPageInfo(pageData);
        localStorage.setItem("pageInfo", JSON.stringify(pageData));
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

    async function requestRePosts() {
        try {
          const res = await api.getRePosts(auth.token);
          setRePosts(res.data);
        } catch (err) {
          console.log("aconteceu um erro em reposts");
          //setRequestState(statesList["error"]);
        }
    }

    const timeLine = {
        page,
        reload,
        getPage,
        setPageAndReload,
        requestRePosts,
    }


    return(
        <PageContext.Provider value={{page, pageInfo, pageUsername, setPageAndReload, timeLine, rePosts}}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;