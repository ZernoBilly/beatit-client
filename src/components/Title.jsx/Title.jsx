import React from "react";

import { StyledTitle } from "../styled/StyledTitle/StyledTitle";
import { StyledTitleTextContainer } from "../styled/StyledTitle/StyledTitleTextContainer";
import { StyledTitleText } from "../styled/StyledTitle/StyledTitleText";
const Title = () => {
  return (
    <StyledTitle>
      <StyledTitleTextContainer>
        <StyledTitleText>title</StyledTitleText>
      </StyledTitleTextContainer>
    </StyledTitle>
  );
};

export default Title;
