import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../styledComponents/Container.js";
import Button from "../../styledComponents/Button";
import Form from "../../styledComponents/Form";
import Input from "../../styledComponents/Input";
import Title from "../../styledComponents/Title";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Title>Bookstore</Title>
      <Form>
        <Input
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button>Entrar</Button>
      </Form>
      <Link to="/sign-up">
        <strong>Primeira vez? Cadastre-se!</strong>
      </Link>
    </Container>
  );
}
