import React, { useState, useEffect } from "react";

import { StyledDrumMachine } from "../styled/StyledDrumMachine/StyledDrumMachine";
import DrumPads from "./DrumPads/DrumPads";

import { padset1 } from "../../data/padSet1";

const DrumMachine = () => {
  const initState = padset1;
  const { pads1, setPads1 } = useState();

  console.log(initState);
  return (
    <StyledDrumMachine>
      <DrumPads pads1={pads1} />
    </StyledDrumMachine>
  );
};

export default DrumMachine;
