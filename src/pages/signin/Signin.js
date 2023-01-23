import { useNavigate } from "react-router-dom";
import { userContext, useState } from "react";
import myWallet from "../../api";
import UserContext from "../../context";
import { StyledDiv, StyledLink } from "./styled";
import MyWallet from "../../assets/images/MyWallet.svg"

export default function Signin() {
  const { setAuth } = userContext(userContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Authentication(event) {
    event.preventDefault();
    myWallet
      .authenticate({ email, password })
      .then((response) => {
        console.log(response.data);
        setAuth(response.data);
        if (response.data.token !== null) {
          navigate("/home");
        }
      })
      .catch((error) => {
        window.alert(error.response.data);
      });
  }

  return (
    <StyledDiv>
      <img src={MyWallet} alt="logo" />
      <form onSubmit={Authentication}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          type="email"
          value={email}
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
          value={password}
          required
        />
        <button type="submit">ENTRAR</button>
      </form>
      <StyledLink to="/cadastro">
        <p>Primeira vez? Cadastre-se!</p>
      </StyledLink>
    </StyledDiv>
  );
}