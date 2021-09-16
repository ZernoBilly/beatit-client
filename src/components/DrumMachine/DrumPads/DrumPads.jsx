import React from "react";

import { StyledDrumPadsContainer } from "../../styled/StyledDrumPads/StyledDrumPadsContainer";
import { StyledSoundButtonContainer } from "../../styled/StyledDrumPads/StyledSoundButtonContainer";
import { StyledSoundUpButton } from "../../styled/StyledDrumPads/StyledSoundUpButton";
import { StyledSoundDownButton } from "../../styled/StyledDrumPads/StyledSoundDownButton";

import SinglePad from "./SinglePad/SinglePad";

const DrumPads = ({ pads, setPads, currentStep, play }) => {
  return (
    <StyledDrumPadsContainer>
      <StyledSoundButtonContainer>
        <StyledSoundUpButton></StyledSoundUpButton>
        <StyledSoundDownButton></StyledSoundDownButton>
      </StyledSoundButtonContainer>
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
