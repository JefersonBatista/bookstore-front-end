import { useNavigate } from "react-router-dom";

import { Button, Title } from "../../styledComponents";

import { Header, Options } from "./style";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <Header>
      <Title>Bookstore</Title>

      <Options>
        <Button onClick={() => navigate("/log-in")}>Entrar</Button>
        <Button highlighted onClick={() => navigate("/sign-up")}>
          Cadastrar-se
        </Button>
      </Options>
    </Header>
  );
}
