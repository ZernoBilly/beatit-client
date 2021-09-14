import React from "react";

import { StyledSinglePad } from "../../../styled/StyledDrumPads/StyledSinglePad";
import theme from "../../../../theme/theme";

const SinglePad = ({ disabled }) => {
  return (
    <>
      <StyledSinglePad
        color={disabled ? theme.palette.white : theme.palette.green}
      ></StyledSinglePad>
    </>
  );
};

export default SinglePad;
