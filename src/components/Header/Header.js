import HeaderContainer from "./HeaderContainer";
import HeaderContent from "./HeaderContent";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import Browser from "./Browser";
import { UsersList } from "./Browser/style";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserSearch from "../UserSearch";

export default function Header({ menuSelect, setMenuSelect, reload }) {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    logout();
    setMenuSelect(false);
    navigate("/");
  }


  return(
      <HeaderContainer display={(location.pathname === '/' || location.pathname === '/sign-up') ? 'none' : 'inital'}>
          <HeaderContent>

              <Link to={`/timeline`}>
                <h1 onClick={reload}>linkr</h1>
              </Link>
              
              <Browser/>
              
              <HeaderMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect} imageUrl={auth?.image_url}/>

          </HeaderContent>
          {<DropDownMenu dropDownDisplay={menuSelect === false ? false: true} onClick={() => {handleClick()}}>Logout</DropDownMenu>}
              
      </HeaderContainer>
  )

}
