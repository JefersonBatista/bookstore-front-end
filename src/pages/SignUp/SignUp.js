import { useState } from "react";

import api from "../../services/api";
import { Button, Input } from "../../styledComponents";

import { Form } from "./style";

// TODO: disable button while loading
// TODO: in case of success, navigate to "/log-in"

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Você inseriu senhas diferentes");
      return;
    }

    const newUser = { ...formData };
    delete newUser.repeatPassword;

    try {
      await api.signUp(newUser);
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <Input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        type="password"
        placeholder="Senha"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <Input
        type="password"
        placeholder="Confirme a senha"
        name="repeatPassword"
        onChange={handleChange}
        value={formData.repeatPassword}
      />

      <Button type="submit" highlighted>
        Cadastrar-se
      </Button>
    </Form>
  );
}
