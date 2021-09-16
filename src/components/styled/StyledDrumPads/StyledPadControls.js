import styled from "styled-components";

export const StyledPadControls = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  width: 8rem;
  padding: 0 8px 0 8px;
  background-color: ${(props) => props.theme.palette.white};
  position: relative;
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.white};
  border-radius: 3rem;
  transition: 0.2s;
  box-shadow: -7px -7px 15px rgba(255, 255, 255, 1),
    7px 7px 15px rgba(0, 0, 0, 0.1), inset -5px -5px 15px rgba(255, 255, 255, 1),
    inset 5px 5px 15px rgba(0, 0, 0, 0.1);
`;
