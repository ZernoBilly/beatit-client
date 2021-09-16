import styled from "styled-components";

export const StyledDisplaySecondaryText = styled.h1`
  font-size: 1rem;
  font-weight: 200;
  color: ${(props) => props.playColor};
  font-family: ${(props) => props.theme.fontFamily.secondary};
`;
