import styled from "styled-components";

export const StyledControls = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 12rem;
  padding: 0 8px 0 8px;
  background-color: ${(props) => props.theme.palette.white};
  position: relative;
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.white};
  border-radius: 1rem;
  transition: 0.2s;
  box-shadow: -7px -7px 15px rgba(255, 255, 255, 1),
    7px 7px 15px rgba(0, 0, 0, 0.1), inset -5px -5px 15px rgba(255, 255, 255, 1),
    inset 5px 5px 15px rgba(0, 0, 0, 0.1);
`;
