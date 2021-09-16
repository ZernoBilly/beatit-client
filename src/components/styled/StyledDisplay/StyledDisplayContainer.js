import styled from "styled-components";

export const StyledDisplayContainer = styled.div`
  height: 8rem;
  width: 15rem;
  background-color: ${(props) => props.theme.palette.dark};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  border-radius: 0.8rem;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -3px;
    width: 102%;
    height: 102%;
    background-color: none;

    border-radius: 0.8rem;
    border-color: none;
    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.5),
      inset -3px -2px 15px rgba(255, 255, 255, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 102%;
    height: 102%;
    background-color: none;

    border-radius: 0.8rem;
    border-color: none;
    box-shadow: -1px -2px 8px rgba(0, 0, 0, 0.5),
      5px 5px 10px rgba(255, 255, 255, 5);
  }
`;
