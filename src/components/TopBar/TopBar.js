import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { Button, Title } from "../../styledComponents";

import {
  Header,
  OptionsForLoggedOutUser,
  OptionsForLoggedInUser,
} from "./style";
import LogoutButton from "./LogoutButton";

export default function TopBar() {
  const navigate = useNavigate();

  const session = JSON.parse(localStorage.getItem("session"));
  const loggedIn = Boolean(session);
  const username = session?.name;

  return (
    <Header>
      <Link to="/">
        <Title>Bookstore</Title>
      </Link>

      {loggedIn || (
        <OptionsForLoggedOutUser>
          <Button width="100px" onClick={() => navigate("/log-in")}>
            Entrar
          </Button>
          <Button
            width="170px"
            highlighted
            onClick={() => navigate("/sign-up")}
          >
            Cadastrar-se
          </Button>
          <button style={{ all: "unset" }} onClick={() => navigate("/cart")}>
            <FiShoppingCart className="icon" />
          </button>
        </OptionsForLoggedOutUser>
      )}

      {loggedIn && (
        <OptionsForLoggedInUser>
          <span>{username}</span>
          <button style={{ all: "unset" }} onClick={() => navigate("/cart")}>
            <FiShoppingCart className="icon" />
          </button>
          <LogoutButton token={session.token} navigate={navigate} />
        </OptionsForLoggedInUser>
      )}
    </Header>
  );
}
