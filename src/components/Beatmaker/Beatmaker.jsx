import React, { useState } from "react";

import { StyledMainContainer } from "../styled/StyledMainContainer";

import Display from "../Display/Display";
import DrumMachine from "../DrumMachine/DrumMachine";

const Beatmaker = () => {
  const [play, setPlay] = useState(false);
  const [tempo, setTempo] = useState(500);

  return (
    <StyledMainContainer>
      <Display play={play} tempo={tempo} setTempo={setTempo} />
      <DrumMachine
        play={play}
        setPlay={setPlay}
        tempo={tempo}
        setTempo={setTempo}
      />
    </StyledMainContainer>
  );
};

export default Beatmaker;
