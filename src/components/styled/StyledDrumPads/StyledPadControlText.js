import styled from "styled-components";

export const StyledPadControlText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette.dark};
  font-family: ${(props) => props.theme.fontFamily.grey};
  font-weight: 100;
  text-shadow: 0 0 1px ${(props) => props.theme.palette.grey};
`;
