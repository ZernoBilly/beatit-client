import styled from "styled-components";

export const StyledPadControlText = styled.p`
  color: ${(props) => props.theme.palette.lightDark};
  font-size: 1.2rem;
  font-weight: 100;
  text-shadow: 0 0 1px ${(props) => props.theme.palette.grey};
`;
