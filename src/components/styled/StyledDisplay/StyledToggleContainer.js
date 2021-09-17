import styled from "styled-components";

export const StyledToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.togglePosition};
  align-items: center;
  position: absolute;
  height: 4rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.palette.darkWhite};
  right: -20%;
  cursor: pointer;
  box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
    inset 0 8px 8px rgba(0, 0, 0, 0.1), inset 3px 3px 4px rgba(0, 0, 0, 0.1),
    inset -3px -3px 4px rgba(225, 225, 225, 1);
`;

export const StyledToggleSwitch = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: linear-gradient(to right, #f2f6f7, #3b4343);
  margin: 5px 0 5px 0;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1),
    inset -1px -1px 2px rgba(0, 0, 0, 0.1),
    inset 0 4px 5px rgba(225, 225, 225, 0.2),
    inset 0 -4px 5px rgba(225, 225, 225, 0.2);
`;
