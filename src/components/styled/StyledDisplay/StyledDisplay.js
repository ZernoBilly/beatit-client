import styled from "styled-components";

export const StyledDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  background-color: ${(props) => props.theme.palette.lightWhite};
`;
