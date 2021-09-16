import styled from "styled-components";

export const StyledSoundButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 4rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.palette.white};
  box-shadow: -2px -2px 10px rgba(255, 255, 255, 1),
    2px 2px 10px rgba(0, 0, 0, 0.1), inset -1px -1px 10px rgba(255, 255, 255, 1),
    inset 1px 1px 10px rgba(0, 0, 0, 0.1);
`;
