import React from "react";

import { StyledControls } from "../../styled/StyledControls/StyledControls";
import { StyledPlayButton } from "../../styled/StyledControls/StyledPlayButton";
import { StyledStopButton } from "../../styled/StyledControls/StyledStopButton";
import { StyledControlText } from "../../styled/StyledControls/StyledConrtrolText";

import theme from "../../../theme/theme";

const Controls = ({ play, setPlay, setCurrentStep1, setCurrentStep2 }) => {
  const handlePlayClick = () => {
    setPlay(!play);
  };

  const handleStopClick = () => {
    setCurrentStep1(0);
    setCurrentStep2(0);
    setPlay(!play);
  };

  return (
    <StyledControls
      playColor={play ? theme.palette.green : theme.palette.white}
    >
      <StyledStopButton
        onClick={handleStopClick}
        disabled={play ? false : true}
      >
        <StyledControlText>Stop</StyledControlText>
      </StyledStopButton>
      <StyledPlayButton
        onClick={handlePlayClick}
        disabled={play ? true : false}
      >
        <StyledControlText>Start</StyledControlText>
      </StyledPlayButton>
    </StyledControls>
  );
};

export default Controls;
