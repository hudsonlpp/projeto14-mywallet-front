import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 90%;
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    input {
      width: 100%;
      height: 52px;
      background: #ffffff;
      border-radius: 8px;
      padding-left: 14px;
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000;
      border: none;
      ::placeholder {
        color: #7e7e7e;
      }
      :focus {
        outline: 2px solid #8c11be7f;
      }
    }
    button {
      height: 52px;
      margin-top: 8px;
      margin-bottom: 24px;
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
    }
    button:active {
      background-color: #b04bdc;
      font-size: 16px;
      font-weight: 700;
    }
  }
  a {
    color: #fff;
    text-decoration-line: none;
  }
  p {
    text-align: center;
  }
`;