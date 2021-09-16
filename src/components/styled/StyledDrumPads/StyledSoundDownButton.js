import styled from "styled-components";

export const StyledSoundDownButton = styled.button`
  position: relative;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.white};
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.white};
  box-shadow: inset -3px -3px 5px rgba(255, 255, 255, 1),
    5px 5px 10px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.1);

  &:active {
    box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 1),
      -4px -4px 12px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  &:after {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    background-color: none;
    border: 2px solid;
    border-color: ${(props) => props.theme.palette.lightDark};
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
  }
`;
