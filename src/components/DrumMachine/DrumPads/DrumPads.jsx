import React from "react";

import { StyledDrumPadsContainer } from "../../styled/StyledDrumPads/StyledDrumPadsContainer";

import SinglePad from "./SinglePad/SinglePad";

const DrumPads = ({ pads1 }) => {
  return (
    <StyledDrumPadsContainer>
      <SinglePad disabled={true} />
      <SinglePad />
      <SinglePad />
      <SinglePad disabled={true} />
      <SinglePad />
      <SinglePad disabled={false} />
      <SinglePad />
      <SinglePad />
    </StyledDrumPadsContainer>
  );
};

export default DrumPads;
