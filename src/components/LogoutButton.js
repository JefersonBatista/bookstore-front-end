import { FiLogOut } from "react-icons/fi";
import requests from "../services/api";

export default function LogoutButton({ token, navigate }) {
  function requestLogout() {
    requests
      .logout(token)
      .then(() => {
        localStorage.removeItem("session");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert(
          "Não foi possível desconectar, verifique sua conexão ou reset os dados da página"
        );
      });
  }
  return (
    <button style={{ all: "unset" }} onClick={requestLogout}>
      <FiLogOut className="icon" />
    </button>
  );
}
