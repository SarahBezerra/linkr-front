import HeaderContainer from "./HeaderContainer";
import HeaderContent from "./HeaderContent";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import Browser from "./Browser";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import usePage from "../../hooks/usePage";

export default function Header({ menuSelect, setMenuSelect }) {
  const { auth, logout } = useAuth();
  const {setPageAndReload} = usePage;
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

              <Link to={`/timeline`} onClick={()=> setPageAndReload() }>
                <h1>linkr</h1>
              </Link>
              
              <Browser/>
              
              <HeaderMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect} imageUrl={auth?.image_url}/>

          </HeaderContent>
          {<DropDownMenu dropDownDisplay={menuSelect === false ? false: true} onClick={() => {handleClick()}}>Logout</DropDownMenu>}
              
      </HeaderContainer>
  )

}
