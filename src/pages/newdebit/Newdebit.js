import { useNavigate } from "react-router-dom";
import { userContext, useState } from "react";
import myWallet from "../../api";
import UserContext from "../../context";
import { HeaderDiv, StyledDiv } from "./styled";

export default function NewDebit() {
  const { auth } = UserContext(UserContext);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function Authentication(event) {
    event.preventDefault();
    const object = { value: Number(value.replace(",", ".")), description, operation: "debit" };
    console.log(object);
    myWallet
      .insertEntries(object, auth.token)
      .then((response) => {
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
      <HeaderDiv>
        <h1>Nova saída</h1>
      </HeaderDiv>
      <form onSubmit={Authentication}>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Valor"
          type="text"
          value={value}
          required
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
          type="text"
          value={description}
          required
        />
        <button type="submit">Salvar saída</button>
      </form>
    </StyledDiv>
  );
}

