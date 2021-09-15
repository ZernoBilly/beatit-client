import styled from "styled-components";

export const StyledPlayButton = styled.button`
  height: 4rem;
  width: 4rem;
  background: conic-gradient(
    #d7d7d7,
    #c3c3c3,
    #cccc,
    #c6c6c6,
    #d7d7d7,
    #c3c3c3,
    #cccc,
    #c6c6c6,
    #d7d7d7,
    #c3c3c3,
    #cccc,
    #c6c6c6
  );
  cursor: pointer;
  border: 2px solid;
  border-radius: 1rem;
  border-color: #d7d7d7;
  box-shadow: -7px -7px 15px rgba(255, 255, 255, 1),
    7px 7px 15px rgba(0, 0, 0, 0.1);

  &:active {
    box-shadow: -3px -3px 8px rgba(255, 255, 255, 1),
      3px 3px 8px rgba(0, 0, 0, 0.1), inset -1px -1px 5px rgba(255, 255, 255, 1),
      inset 1px 1px 5px rgba(0, 0, 0, 0.1);
    border: 0px;
  }
`;
