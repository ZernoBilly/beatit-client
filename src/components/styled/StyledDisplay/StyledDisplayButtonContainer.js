import styled from "styled-components";

export const StyledDisplayButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  height: 6rem;
  width: 3rem;
  background-color: ${(props) => props.theme.palette.white};
  left: -25%;
`;
