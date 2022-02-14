import { FiLogOut } from "react-icons/fi";
import requests from "../../services/api";

export default function LogoutButton({ token, navigate }) {
  function requestLogout() {
    requests
      .logout(token)
      .then()
      .catch(() => {
        alert(
          "Não foi possível desconectar, mas os dados foram apagados do navegador,verifique a conexão e tente logar novamente para deslogar e proteger sua conta"
        );
      });
    navigate("/");
    localStorage.removeItem("session");
  }
  return (
    <button style={{ all: "unset" }} onClick={requestLogout}>
      <FiLogOut className="icon" />
    </button>
  );
}
