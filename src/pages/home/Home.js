import { userContext, useEffect, useState } from "react";
import UserContext from "../../context";
import { useNavigate } from "react-router-dom";
import myWallet from "../../api";
import Vector from "../../assets/images/Vector.svg"
import plusVector from "../../assets/images/plusVector.svg"
import minusVector from "../../assets/images/minusVector.svg"
import { NoContentDiv, ContentDiv, Balance, NoContentLi, StyledContainer, HeaderDiv, StyledButton } from "./styled";

export default function Home() {
  const { auth } = UserContext(UserContext);
  const [data, setData] = useState();
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (!auth?.token) {
      navigate("/");
    } else {
      myWallet
        .sortEntries(auth.token)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          const result = res.data.reduce((acc, entry) => {
            switch (entry.operation) {
              case "credit":
                return acc + entry.value;
              case "debit":
                return acc - entry.value;
              default:
                return acc;
            }
          }, 0);

          setBalance(result.toFixed(2));
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledContainer>
      <HeaderDiv>
        <h1>Olá, {data.name}</h1>
        <img
          src={Vector}
          alt="Vector"
          onClick={() => {
            navigate("/");
          }}
        />
      </HeaderDiv>
      {data.length > 0 && (
        <ContentDiv>
          <ul>
            {data.map((entry) => (
              <li key={entry.id}>
                <p>
                  <div>
                    <span style={{ color: "#C6C6C6", marginRight: "8px" }}>
                      {entry.date}
                    </span>
                    <span>{entry.description}</span>
                  </div>
                  <span
                    style={{
                      color:
                        entry.operation === "credit" ? "#03AC00" : "#C70000",
                    }}
                  >
                    {entry.value.toFixed(2).replace(".", ",")}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          {data.length > 0 ? (
            <div>
              <Balance>SALDO</Balance>
              <span style={{ color: balance >= 0 ? "#03AC00" : "#C70000" }}>
                {balance.replace(".", ",").replace("-", "")}
              </span>
            </div>
          ) : null}
        </ContentDiv>
      )}
      {data.length === 0 && (
        <NoContentDiv>
          <NoContentLi>
            Não há registros de
            entrada ou saída
          </NoContentLi>
        </NoContentDiv>
      )}
      <StyledButton>
        <div
          onClick={() => {
            navigate("/nova-entrada");
          }}
        >
          <img
            src={plusVector}
            alt="plusVector"
            onClick={() => {
              navigate("/");
            }}
          />
          <p>
            Nova
            <br />
            entrada
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/nova-saida");
          }}
        >
          <img src={minusVector} alt="minusVector" />
          <p>
            Nova
            <br />
            saída
          </p>
        </div>
      </StyledButton>
    </StyledContainer>
  );
}