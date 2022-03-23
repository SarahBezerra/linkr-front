import HeaderContainer from "./HeaderContainer";
import HeaderContent from "./HeaderContent";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { useNavigate } from "react-router-dom";

export default function Header({menuSelect, setMenuSelect}){

    const navigate = useNavigate()

    function handleClick(event){
        console.log(event);
        navigate('/sign-up');
        setMenuSelect(false);
    }

    return(
        <HeaderContainer>
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