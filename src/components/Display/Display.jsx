import React, { useState } from "react";

import { StyledDisplay } from "../styled/StyledDisplay/StyledDisplay";
import { StyledDisplayContainer } from "../styled/StyledDisplay/StyledDisplayContainer";
import { StyledDisplayText } from "../styled/StyledDisplay/StyledDisplayText";
import { StyledDisplayButtonContainer } from "../styled/StyledDisplay/StyledDisplayButtonContainer";
import { StyledDisplayButton } from "../styled/StyledDisplay/StyledDisplayButton";
import { StyledDisplaySecondaryText } from "../styled/StyledDisplay/StyledDisplaySecondaryText";
import { StyledSelectedSoundsContainer } from "../styled/StyledDisplay/StyledSelectedSoundsContainer";
import { StyledSelectedSoundsText } from "../styled/StyledDisplay/StyledSelectedSoundsText";
import {
  StyledToggleContainer,
  StyledToggleSwitch,
} from "../styled/StyledDisplay/StyledToggleContainer";
import { StyledTempoSwitchText } from "../styled/StyledDisplay/StyledTempoSwitchText";

import theme from "../../theme/theme";

const Display = ({
  play,
  tempo,
  setTempo,
  selectedSound1,
  selectedSound2,
  selectedSound3,
}) => {
  const [tempoDivider, setTempoDivider] = useState(true);

  const toggleTempo = () => {
    setTempoDivider(!tempoDivider);
  };

  const changeTempo = (num) => {
    if (tempoDivider) {
      setTempo((60000 / (60000 / tempo + num)).toFixed(10));
    } else {
      setTempo((30000 / (30000 / tempo + num)).toFixed(10));
    }
  };

  return (
    <StyledDisplay>
      <StyledDisplayContainer>
        <StyledTempoSwitchText>
          {tempoDivider ? "1/4" : "1/8"}
        </StyledTempoSwitchText>
        <StyledDisplayButtonContainer>
          <StyledDisplayButton onClick={() => changeTempo(1)}>
            +
          </StyledDisplayButton>
          <StyledDisplayButton onClick={() => changeTempo(-1)}>
            -
          </StyledDisplayButton>
        </StyledDisplayButtonContainer>
        <StyledSelectedSoundsContainer>
          <StyledSelectedSoundsText>{selectedSound1}</StyledSelectedSoundsText>
          <StyledSelectedSoundsText>{selectedSound2}</StyledSelectedSoundsText>
          <StyledSelectedSoundsText>{selectedSound3}</StyledSelectedSoundsText>
        </StyledSelectedSoundsContainer>
        <StyledDisplayText>
          {tempoDivider
            ? (60000 / tempo).toFixed(0)
            : (30000 / tempo).toFixed(0)}
        </StyledDisplayText>
        <StyledDisplaySecondaryText
          playColor={play ? theme.palette.grey : theme.palette.red}
        >
          {play ? "Playing" : "Stopped"}
        </StyledDisplaySecondaryText>
        <StyledToggleContainer
          onClick={toggleTempo}
          togglePosition={tempoDivider ? "flex-start" : "flex-end"}
        >
          <StyledToggleSwitch></StyledToggleSwitch>
        </StyledToggleContainer>
      </StyledDisplayContainer>
    </StyledDisplay>
  );
};

export default Display;
