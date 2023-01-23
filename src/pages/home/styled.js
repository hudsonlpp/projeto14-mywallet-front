import styled from "styled-components";

export const NoContentDiv = styled.div`
  background-color: #fff;
  height: 446px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ContentDiv = styled.div`
  padding: 23px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 446px;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Balance = styled.span`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
`;

export const NoContentLi = styled.li`
  list-style-type: none;
  font-family: "Raleway";
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
`;

export const StyledContainer = styled.div`
  max-width: 500px;
  width: 90%;
  height: 100%;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  h1 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #fff;
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  div {
    background-color: #a328d6;
    width: calc(50% - 15px / 2);
    height: 114px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
    img {
      height: 25px;
      width: 25px;
    }
    p {
      font-family: "Raleway";
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
    }
  }
`;