import styled from "styled-components";

export const StyledStopButton = styled.button`
  height: 4rem;
  width: 4rem;
  background: conic-gradient(
    #e6e9bf,
    #d2b5aa,
    #cbaea3,
    #d4b5ab,
    #e6e9bf,
    #d2b5aa,
    #cbaea3,
    #d4b5ab,
    #e6e9bf,
    #d2b5aa,
    #cbaea3,
    #d4b5ab
  );
  cursor: pointer;
  border: 2px solid;
  border-radius: 1rem;
  border-color: #e6e9bf;
  box-shadow: -7px -7px 15px rgba(255, 255, 255, 1),
    7px 7px 15px rgba(0, 0, 0, 0.1);

  &:active {
    box-shadow: -3px -3px 8px rgba(255, 255, 255, 1),
      3px 3px 8px rgba(0, 0, 0, 0.1), inset -1px -1px 5px rgba(255, 255, 255, 1),
      inset 1px 1px 5px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    opacity: 1;
  }
`;
