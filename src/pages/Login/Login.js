import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../styledComponents/Container.js";
import Button from "../../styledComponents/Button";
import Form from "../../styledComponents/Form";
import Input from "../../styledComponents/Input";
import Title from "../../styledComponents/Title";
import requests from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function requestLogIn(e) {
    e.preventDefault();
    setIsLoading(true);
    const requestBody = {
      email,
      password,
    };
    requests
      .login(requestBody)
      .then((res) => {
        const session = JSON.stringify(res.data);
        console.log(res.data);
        localStorage.setItem("session", session);
        navigate("/catalogue");
      })
      .catch((err) => {
        alert(
          "Não foi possível conectar, verifique se o e-mail e senha estão corretos"
        );
        setIsLoading(false);
      });
  }
  return (
    <Container>
      <Title>Bookstore</Title>
      <Form
        onSubmit={(e) => {
          setIsLoading(true);
          requestLogIn(e);
        }}
      >
        <Input
          placeholder="e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
          highlighted
        >
          {isLoading ? "Carregando..." : "Entrar"}
        </Button>
      </Form>
      <Link to="/sign-up">
        <strong>Primeira vez? Cadastre-se!</strong>
      </Link>
    </Container>
  );
}
