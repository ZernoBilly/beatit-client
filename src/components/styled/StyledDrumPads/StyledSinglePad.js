import styled from "styled-components";

export const StyledSinglePad = styled.button`
  margin: 0 2rem;
  position: relative;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.palette.white};
  border-radius: 50%;
  border: 6px solid;
  border-color: ${(props) => props.theme.palette.white};
  cursor: pointer;
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
    8px 8px 15px rgba(0, 0, 0, 0.2), inset 3px 3px 5px rgba(0, 0, 0, 0.1),
    inset -1px -1px 5px rgba(255, 255, 255, 1);
  transition: 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.currentStepColor};
    border-radius: 50%;
    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1),
      inset -1px -1px 5px rgba(255, 255, 255, 1);
  }

  &::after {
    content: "";
    opacity: 0.6;
    position: absolute;
    top: -17px;
    left: -17px;
    width: 170%;
    height: 170%;
    border-radius: 50%;
    border: 4px solid;
    border-color: ${(props) => props.activeStepColor};
    box-shadow: -5px -5px 12px rgba(0, 0, 0, 0.2),
      5px 5px 12px rgba(255, 255, 255, 1),
      inset 2px 2px 4px rgba(255, 255, 255, 1),
      inset -1px -1px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    border: 7.5px solid;
    border-color: ${(props) => props.theme.palette.white};
  }

  /* &:disabled {
    &:after {
      border-color: ${(props) => props.theme.palette.white};
    }
  } */
`;
