import React, { useEffect } from "react";

import { StyledSinglePad } from "../../../styled/StyledDrumPads/StyledSinglePad";
import theme from "../../../../theme/theme";

import Cabasa from "../../../../sounds/Cabasa.wav";
import HiHat from "../../../../sounds/HiHat.wav";
import Kick from "../../../../sounds/Kick.wav";
import Snare from "../../../../sounds/Snare.wav";
import Stick from "../../../../sounds/Stick.wav";
import Tamborine from "../../../../sounds/Tamborine.wav";
import Tom from "../../../../sounds/Tom.wav";

const SinglePad = ({
  index,
  active,
  pads,
  setPads,
  currentStep,
  play,
  selectedSound,
}) => {
  const handlePadClick = () => {
    const newArray = [...pads];
    newArray[index].active = !newArray[index].active;
    setPads(newArray);
  };

  const playSound = (sound) => {
    const sample = document.getElementById(sound);
    sample.currentTime = 0;
    sample.play();
  };

  useEffect(() => {
    if (index === currentStep && active) {
      playSound(selectedSound);
    }
  }, [currentStep, play]);

  return (
    <>
      <StyledSinglePad
        currentStepColor={
          index === currentStep && play
            ? theme.palette.green
            : theme.palette.white
        }
        activeStepColor={active ? theme.palette.green : theme.palette.white}
        onClick={handlePadClick}
      >
        <audio id="Cabasa" src={Cabasa} preload="auto" type="audio/wav" />
        <audio id="HiHat" src={HiHat} preload="auto" type="audio/wav" />
        <audio id="Kick" src={Kick} preload="auto" type="audio/wav" />
        <audio id="Snare" src={Snare} preload="auto" type="audio/wav" />
        <audio id="Stick" src={Stick} preload="auto" type="audio/wav" />
        <audio id="Tamborine" src={Tamborine} preload="auto" type="audio/wav" />
        <audio id="Tom" src={Tom} preload="auto" type="audio/wav" />
      </StyledSinglePad>
    </>
  );
};

export default SinglePad;
