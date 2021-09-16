import React, { useState } from "react";

import { StyledMainContainer } from "../styled/StyledMainContainer";

import Display from "../Display/Display";
import DrumMachine from "../DrumMachine/DrumMachine";

import { sounds } from "../../data/padSet1";

const Beatmaker = () => {
  const [play, setPlay] = useState(false);
  const [tempo, setTempo] = useState(500);
  const [selectedSound1, setSelectedSound1] = useState(sounds[2]);
  const [selectedSound2, setSelectedSound2] = useState(sounds[3]);
  const [selectedSound3, setSelectedSound3] = useState(sounds[1]);

  return (
    <StyledMainContainer>
      <Display
        play={play}
        tempo={tempo}
        setTempo={setTempo}
        selectedSound1={selectedSound1}
        selectedSound2={selectedSound2}
        selectedSound3={selectedSound3}
      />
      <DrumMachine
        play={play}
        setPlay={setPlay}
        tempo={tempo}
        setTempo={setTempo}
        selectedSound1={selectedSound1}
        selectedSound2={selectedSound2}
        selectedSound3={selectedSound3}
        setSelectedSound1={setSelectedSound1}
        setSelectedSound2={setSelectedSound2}
        setSelectedSound3={setSelectedSound3}
        sounds={sounds}
      />
    </StyledMainContainer>
  );
};

export default Beatmaker;
