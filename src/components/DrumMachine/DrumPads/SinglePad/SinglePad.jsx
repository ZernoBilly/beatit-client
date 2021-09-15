import React from "react";

import { StyledSinglePad } from "../../../styled/StyledDrumPads/StyledSinglePad";
import theme from "../../../../theme/theme";

const SinglePad = ({ index, active, pads, setPads, currentStep, play }) => {
  const handlePadClick = () => {
    const newArray = [...pads];
    newArray[index].active = !newArray[index].active;
    setPads(newArray);
  };

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
      ></StyledSinglePad>
    </>
  );
};

export default SinglePad;
