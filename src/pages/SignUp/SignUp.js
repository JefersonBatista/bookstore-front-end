import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";
import { Container, Title, Form, Button, Input } from "../../styledComponents";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    if (formData.password !== formData.repeatPassword) {
      alert("Você inseriu senhas diferentes");
      setIsLoading(false);
      return;
    }

    const newUser = { ...formData };
    delete newUser.repeatPassword;

    try {
      await api.signUp(newUser);

      navigate("/log-in");
    } catch (error) {
      alert(error.response.data);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Title>Bookstore</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          name="repeatPassword"
          onChange={handleChange}
          value={formData.repeatPassword}
          required
        />

        <Button type="submit" highlighted disabled={isLoading}>
          {isLoading ? "Carregando..." : "Cadastrar"}
        </Button>
      </Form>

      <Link to="/log-in">
        <strong>Já tem uma conta? Entre agora!</strong>
      </Link>
    </Container>
  );
}
