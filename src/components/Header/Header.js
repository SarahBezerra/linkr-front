import HeaderContainer from "./HeaderContainer";
import HeaderContent from "./HeaderContent";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

export default function Header({menuSelect, setMenuSelect}){


    return(
        <HeaderContainer>
            <HeaderContent>
                <span>linkr</span>

                <div style={{position: 'relative'}}>
                    <HeaderMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
                    
                </div>

            </HeaderContent>
                {menuSelect === false ? <DropDownMenu top={'0'}>Logout</DropDownMenu> : <DropDownMenu top={'100%'}>Logout</DropDownMenu>}
                
        </HeaderContainer>
    )


}