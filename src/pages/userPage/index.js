import Timeline from "../Timeline";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import usePage from "../../hooks/usePage";

function UserPage(){

    return(
        <>
            <Timeline newPostDisplay={'none'} ></Timeline>
        </>
    )
}

export default UserPage