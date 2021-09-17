import React from "react";

import { StyledPadControls } from "../../styled/StyledDrumPads/StyledPadControls";
import { StyledPadControlAddButton } from "../../styled/StyledDrumPads/StyledPadControlAddButton";
import { StyledPadControlText } from "../../styled/StyledDrumPads/StyledPadControlText";

const PadControls = ({ pads, setPads }) => {
  const handleAddClick = () => {
    if (pads.length < 8) {
      setPads([
        ...pads,
        {
          index: pads.length,
          active: false,
        },
      ]);
    }
  };

  const handleRemoveClick = () => {
    if (pads.length > 1) {
      const newPads = [...pads];
      newPads.pop();
      setPads(newPads);
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
