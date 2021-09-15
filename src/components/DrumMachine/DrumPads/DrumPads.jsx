import React from "react";

import { StyledDrumPadsContainer } from "../../styled/StyledDrumPads/StyledDrumPadsContainer";

import SinglePad from "./SinglePad/SinglePad";

const DrumPads = ({ pads, setPads, currentStep, play }) => {
  return (
    <StyledDrumPadsContainer>
      {pads.map((pad, idx) => (
        <SinglePad
          index={pad.index}
          active={pad.active}
          pads={pads}
          setPads={setPads}
          key={idx}
          currentStep={currentStep}
          play={play}
        />
      ))}
    </StyledDrumPadsContainer>
  );
};

export default DrumPads;
