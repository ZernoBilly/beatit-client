import React from "react";

import { StyledDisplay } from "../styled/StyledDisplay/StyledDisplay";
import { StyledDisplayContainer } from "../styled/StyledDisplay/StyledDisplayContainer";
import { StyledDisplayText } from "../styled/StyledDisplay/StyledDisplayText";
import { StyledDisplayButtonContainer } from "../styled/StyledDisplay/StyledDisplayButtonContainer";
import { StyledDisplayButton } from "../styled/StyledDisplay/StyledDisplayButton";
import { StyledDisplaySecondaryText } from "../styled/StyledDisplay/StyledDisplaySecondaryText";

import theme from "../../theme/theme";

const Display = ({ play, tempo, setTempo }) => {
  const calculateBpm = () => {
    return Math.ceil(60000 / tempo);
  };

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
