import { useNavigate } from "react-router-dom";
import { UserContext, useState } from "react";
import myWallet from "../../api";
import UserContext from "../../context";
import { StyledDiv, HeaderDiv} from "./styled"

export default function NewCredit() {
  const { auth } = UserContext(UserContext);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function Authentication(event) {
    event.preventDefault();
    const object = { value: Number(value.replace(",", ".")), description, operation: "credit" };
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
        <h1>Nova entrada</h1>
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
        <button type="submit">Salvar entrada</button>
      </form>
    </StyledDiv>
  );
}

