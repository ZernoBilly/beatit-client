import React from "react";

import { StyledPadControls } from "../../styled/StyledDrumPads/StyledPadControls";
import { StyledPadControlAddButton } from "../../styled/StyledDrumPads/StyledPadControlAddButton";
import { StyledPadControlText } from "../../styled/StyledDrumPads/StyledPadControlText";

const PadControls = ({ pads, setPads, setPlay }) => {
  const handleAddClick = () => {
    setPads([
      ...pads,
      {
        index: pads.length,
        active: false,
      },
    ]);
  };
  console.log(pads);

  const handleRemoveClick = () => {
    if (pads.length > 1) {
      const newPads = [...pads];
      newPads.pop();
      setPads(newPads);
      setPlay(false);
    }
  };
  return (
    <StyledPadControls>
      <StyledPadControlAddButton onClick={handleRemoveClick}>
        <StyledPadControlText>-</StyledPadControlText>
      </StyledPadControlAddButton>
      <StyledPadControlAddButton onClick={handleAddClick}>
        <StyledPadControlText>+</StyledPadControlText>
      </StyledPadControlAddButton>
    </StyledPadControls>
  );
};

export default PadControls;
