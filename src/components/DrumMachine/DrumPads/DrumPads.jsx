import React from "react";

import { StyledDrumPadsContainer } from "../../styled/StyledDrumPads/StyledDrumPadsContainer";
import { StyledSoundButtonContainer } from "../../styled/StyledDrumPads/StyledSoundButtonContainer";
import { StyledSoundUpButton } from "../../styled/StyledDrumPads/StyledSoundUpButton";
import { StyledSoundDownButton } from "../../styled/StyledDrumPads/StyledSoundDownButton";

import SinglePad from "./SinglePad/SinglePad";

const DrumPads = ({
  pads,
  setPads,
  currentStep,
  play,
  selectedSound,
  setSelectedSound,
  sounds,
}) => {
  const handleSoundChange = (value) => {
    const newIndex = sounds.indexOf(selectedSound) + value;
    if (newIndex > sounds.length - 1) {
      setSelectedSound(sounds[0]);
    } else if (newIndex < 0) {
      setSelectedSound(sounds[sounds.length - 1]);
    } else {
      setSelectedSound(sounds[newIndex]);
    }
  };

  return (
    <StyledDrumPadsContainer>
      <StyledSoundButtonContainer>
        <StyledSoundUpButton
          onClick={() => handleSoundChange(1)}
        ></StyledSoundUpButton>
        <StyledSoundDownButton
          onClick={() => handleSoundChange(-1)}
        ></StyledSoundDownButton>
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
          selectedSound={selectedSound}
        />
      ))}
    </StyledDrumPadsContainer>
  );
};

export default DrumPads;
