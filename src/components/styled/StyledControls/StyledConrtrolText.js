import styled from "styled-components";

export const StyledControlText = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.palette.dark};
  font-family: ${(props) => props.theme.fontFamily.main};
  font-weight: 100;
  text-shadow: 0 0 1px ${(props) => props.theme.palette.lightDark},
    0 0 2px ${(props) => props.theme.palette.grey};
`;
