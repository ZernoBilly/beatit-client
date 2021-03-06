import styled from "styled-components";

export const StyledDrumPadsContainer = styled.div`
  width: 60%;
  height: 6rem;
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-bottom: 0.5rem;
`;
