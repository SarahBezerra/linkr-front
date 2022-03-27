import PageContext from "../contexts/pageContext";
import { useContext } from "react";

export default function usePage(){

    return useContext(PageContext)
}