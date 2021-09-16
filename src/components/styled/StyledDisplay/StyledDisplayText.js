import styled from "styled-components";

export const StyledDisplayText = styled.h1`
  margin-top: 1.2rem;
  font-size: 2.5rem;
  font-weight: 200;
  color: ${(props) => props.theme.palette.green};
  font-family: ${(props) => props.theme.fontFamily.secondary};
`;
