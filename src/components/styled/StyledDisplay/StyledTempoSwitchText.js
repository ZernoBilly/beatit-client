import styled from "styled-components";

export const StyledTempoSwitchText = styled.p`
  position: absolute;
  font-size: 0.8rem;
  font-weight: 100;
  font-family: ${(props) => props.theme.fontFamily.secondary};
  color: ${(props) => props.theme.palette.grey};
  right: 7%;
  letter-spacing: 2px;
`;
