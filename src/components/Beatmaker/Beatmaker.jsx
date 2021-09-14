import React from "react";

import { StyledMainContainer } from "../styled/StyledMainContainer";

import Title from "../Title.jsx/Title";
import DrumMachine from "../DrumMachine/DrumMachine";

const Beatmaker = () => {
  return (
    <StyledMainContainer
      style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}
    >
      <Title />
      <DrumMachine />
    </StyledMainContainer>
  );
};

export default Beatmaker;
