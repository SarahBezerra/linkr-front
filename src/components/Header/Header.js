import HeaderContainer from "./HeaderContainer";
import HeaderContent from "./HeaderContent";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header({menuSelect, setMenuSelect}){

    const navigate = useNavigate();
    const location = useLocation();

    function handleClick(event){
        console.log(event);
        navigate('/login');
        setMenuSelect(false);
    }

    return(
        <HeaderContainer display={location.pathname === '/login' ? 'none': 'initial'}>
            <HeaderContent>
                <span>linkr</span>

                <div style={{position: 'relative'}}>
                    <HeaderMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
                </div>
            </HeaderContent>
                {<DropDownMenu top={'100%'} disabled={false} display={menuSelect === false ? 'none': 'flex'} onClick={(e) => {handleClick(e)}}>Logout</DropDownMenu>}
                
        </HeaderContainer>
    )


}