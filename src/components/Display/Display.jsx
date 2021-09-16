import React from "react";

import { StyledDisplay } from "../styled/StyledDisplay/StyledDisplay";
import { StyledDisplayContainer } from "../styled/StyledDisplay/StyledDisplayContainer";
import { StyledDisplayText } from "../styled/StyledDisplay/StyledDisplayText";
import { StyledDisplayButtonContainer } from "../styled/StyledDisplay/StyledDisplayButtonContainer";
import { StyledDisplayButton } from "../styled/StyledDisplay/StyledDisplayButton";
import { StyledDisplaySecondaryText } from "../styled/StyledDisplay/StyledDisplaySecondaryText";
import { StyledSelectedSoundsContainer } from "../styled/StyledDisplay/StyledSelectedSoundsContainer";
import { StyledSelectedSoundsText } from "../styled/StyledDisplay/StyledSelectedSoundsText";

import theme from "../../theme/theme";

const Display = ({
  play,
  tempo,
  setTempo,
  selectedSound1,
  selectedSound2,
  selectedSound3,
}) => {
  const changeTempo = (num) => {
    setTempo((60000 / (60000 / tempo + num)).toFixed(10));
  };
  return (
    <StyledDisplay>
      <StyledDisplayContainer>
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
        <StyledDisplayText>{Math.ceil(60000 / tempo)}</StyledDisplayText>
        <StyledDisplaySecondaryText
          playColor={play ? theme.palette.grey : theme.palette.red}
        >
          {play ? "Playing" : "Stopped"}
        </StyledDisplaySecondaryText>
      </StyledDisplayContainer>
    </StyledDisplay>
  );
};

export default Display;
