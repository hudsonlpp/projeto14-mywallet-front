import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 90%;
  form {
    width: 100%;
    input {
      border-radius: 8px;
      border: none;
      color: #000;
      font-family: "Raleway", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      height: 52px;
      line-height: 16px;
      padding-left: 14px;
      width: 100%;
      &::placeholder {
        color: #7e7e7e;
      }
      &:focus {
        outline: 2px solid #8c11be7f;
      }
    }
    input[type="email"] {
      margin-bottom: 16px;
    }
    button {
      background-color: #a328d6;
      border-radius: 8px;
      border: none;
      color: #fff;
      font-family: "Raleway", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      height: 52px;
      line-height: 16px;
      margin: 24px 0;
      width: 100%;
    }
    button:active {
      background-color: #b04bdc;
      font-size: 16px;
      font-weight: 700;
    }
  }
  p {
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration-line: none;
`;