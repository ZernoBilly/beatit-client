import styled from "styled-components";

export const StyledPadControlAddButton = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.white};
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.white};
  box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 1),
    5px 5px 10px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.1);

  &:active {
    box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 1),
      -4px -4px 12px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;
