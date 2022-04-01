import {
  BrowserContainer,
  IconContainer,
  InputContainer,
  UsersList,
  IntegrationContainer,
  User,
} from "./style";
import { SearchOutline } from "react-ionicons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Img from "../../Users/Image";
import api from "../../../services/api";
import { DebounceInput } from "react-debounce-input";
import usePage from "../../../hooks/usePage";
import useAuth from "../../../hooks/useAuth";

export default function Browser() {
  const [browser, setBrowser] = useState("");
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { page, pageUsername } = usePage();
  const { auth } = useAuth();

  useEffect(() => {
    setBrowser("");
    setUsers([]);
  }, []);

  useEffect(() => {
    if (browser.length >= 3) {
      filterUsers();
    }
  }, [browser]);

  const filterUsers = async () => {
    try {
      const result = await api.browserUsers(browser, auth.userId);
      setUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  function BrowserHandler(text) {
    if (text.length >= 3) {
      setSearch(text);
      setActive(true);
      setBrowser(text);
    } else {
      setActive(false);
      setBrowser(text);
      setUsers("");
    }
  }

  return (
    <IntegrationContainer width={"40%"}>
      <BrowserContainer>
        <UsersList
          height={users.length > 0 ? `30px + ${users.length}*50px` : "0px"}
        >
          {users.length === 0 ? (
            <User userHeight={"0px"} />
          ) : (
            users.map((user, i) => {
              const { username, image_url } = user;

              return (
                <User
                  key={username + i}
                  userHeight={users.length > 0 ? "50px" : "0px"}
                >
                  <Img
                    src={user.image_url}
                    onClick={() => {
                      setBrowser("");
                      setUsers([]);
                      pageUsername({ username, image_url });
                      navigate(`/user/${user.id}`);
                    }}
                  />

                  <span
                    onClick={() => {
                      setBrowser("");
                      setUsers([]);
                      pageUsername({ username, image_url });
                      navigate(`/user/${user.id}`);
                    }}
                  >
                    {user.username}
                    {user.status === 1 ? (
                      <span style={{ color: "#C5C5C5" }}>• following</span>
                    ) : (
                      ""
                    )}
                  </span>
                </User>
              );
            })
          )}
        </UsersList>

        <DebounceInput
          element={InputContainer}
          placeholder={"Search for people"}
          value={browser}
          onChange={(e) => {
            BrowserHandler(e.target.value);
          }}
          debounceTimeout={300}
        />

        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </BrowserContainer>
    </IntegrationContainer>
  );
}

function SearchIcon() {
  return <SearchOutline color={"#000"} height="25px" width="25px" />;
}
