import {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTitle,
} from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledContainer>
      <StyledTitle>Bookstore</StyledTitle>
      <StyledForm>
        <StyledInput
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledInput
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <StyledButton>Entrar</StyledButton>
      </StyledForm>
      <Link to="/sign-up">
        <strong>Primeira vez? Cadastre-se!</strong>
      </Link>
    </StyledContainer>
  );
}
