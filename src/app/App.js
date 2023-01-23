import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import NewCredit from "../pages/newcredit/Newcredit";
import NewDebit from "../pages/newdebit/Newdebit";
import UserContext from "../context";
import { StyledDiv } from "./styled";

export default function App() {
  const [auth, setAuth] = useState(undefined);
  return (
    <>
      <StyledDiv>
        <UserContext.Provider value={{ auth, setAuth }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/cadastro" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/nova-entrada" element={<NewCredit />} />
              <Route path="/nova-saida" element={<NewDebit />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </StyledDiv>
    </>
  );
}