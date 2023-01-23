import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import myWallet from "../../api";
import { SignupContainer } from "./styled";
import MyWallet from "../../assets/images/MyWallet.svg"


export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function Authentication(event) {
    event.preventDefault();
    myWallet
      .authSignUp(form)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        window.alert(error.response.data);
      });
  }

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <SignupContainer>
      <img src={MyWallet} alt="logo" />
      <form onSubmit={Authentication}>
        <input
          name="name"
          onChange={handleForm}
          placeholder="Nome"
          type="text"
          value={form.name}
          required
        />
        <input
          name="email"
          onChange={handleForm}
          placeholder="E-mail"
          type="email"
          value={form.email}
          required
        />
        <input
          name="password"
          onChange={handleForm}
          placeholder="Senha"
          type="password"
          value={form.password}
          required
        />
        <input
          name="confirmPassword"
          onChange={handleForm}
          placeholder="Confirme a senha"
          type="password"
          value={form.confirmPassword}
          required
        />
        <button type="submit">CADASTRAR</button>
      </form>
      <Link to={"/"}>
        <p>Já possuí uma conta? Entre</p>
      </Link>
    </SignupContainer>
  );
}

