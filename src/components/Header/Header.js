import HeaderContainer from "./HeaderContainer";
import HeaderContent from "./HeaderContent";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Header({ menuSelect, setMenuSelect }) {

  const {auth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(auth);

  function handleClick(event) {
    navigate("/");
    setMenuSelect(false);
  }

  return(
      <HeaderContainer display={(location.pathname === '/' || location.pathname === '/sign-up') ? 'none' : 'inital'}>
          <HeaderContent>
              <span>linkr</span>

              <div style={{position: 'relative'}}>
                  <HeaderMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect} imageUrl={auth.image_url}/>
              </div>
          </HeaderContent>
          {<DropDownMenu dropDownDisplay={menuSelect === false ? false: true} onClick={(e) => {handleClick(e)}}>Logout</DropDownMenu>}
              
      </HeaderContainer>
  )
}

