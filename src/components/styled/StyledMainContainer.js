import styled from "styled-components";

export const StyledMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.lightWhite};
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 70%;
    height: 100%;
    background-color: ${(props) => props.theme.palette.white};
    top: 0;
    left: 0;
    margin-right: 15%;
    margin-left: 15%;
    border: 3px solid;
    border-color: #e5e5e5;
    border-radius: 1rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5),
      inset -5px -10px 50px rgba(255, 255, 255, 1);
  }
`;
