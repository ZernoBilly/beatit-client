import React, { useEffect } from "react";

import { StyledSinglePad } from "../../../styled/StyledDrumPads/StyledSinglePad";
import theme from "../../../../theme/theme";

const SinglePad = ({ index, active, pads, setPads, currentStep, play }) => {
  const handlePadClick = () => {
    const newArray = [...pads];
    newArray[index].active = !newArray[index].active;
    setPads(newArray);
  };

  const playSound = () => {
    const sample = document.getElementById("sound");
    sample.play();
  };

  useEffect(() => {
    if (index === currentStep && active) {
      playSound();
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
        <audio id="sound" />
      </StyledSinglePad>
    </>
  );
};

export default SinglePad;
