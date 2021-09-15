import React, { useState, useEffect } from "react";

import { StyledDrumMachine } from "../styled/StyledDrumMachine/StyledDrumMachine";
import DrumPads from "./DrumPads/DrumPads";
import Controls from "./Controls/Controls";
import PadControls from "./PadControls/PadControls";

import { padSet1, padSet2 } from "../../data/padSet1";

const DrumMachine = () => {
  const [pads1, setPads1] = useState(padSet1);
  const [pads2, setPads2] = useState(padSet2);
  const [currentStep1, setCurrentStep1] = useState(0);
  const [currentStep2, setCurrentStep2] = useState(0);
  const [play, setPlay] = useState(false);
  const [tempo, setTempo] = useState(1000);

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        if (currentStep1 < pads1.length - 1) {
          setCurrentStep1((currentStep1) => currentStep1 + 1);
        } else {
          setCurrentStep1(0);
        }
      }, tempo);

      return () => clearInterval(interval);
    }
  }, [currentStep1, play]);

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        if (currentStep2 < pads2.length - 1) {
          setCurrentStep2((currentStep2) => currentStep2 + 1);
        } else {
          setCurrentStep2(0);
        }
      }, tempo);

      return () => clearInterval(interval);
    }
  }, [currentStep2, play]);

  return (
    <StyledDrumMachine>
      <DrumPads
        pads={pads1}
        setPads={setPads1}
        currentStep={currentStep1}
        play={play}
      />
      <PadControls pads={pads1} setPads={setPads1} setPlay={setPlay} />
      <DrumPads
        pads={pads2}
        setPads={setPads2}
        currentStep={currentStep2}
        play={play}
      />
      <PadControls />
      <Controls
        play={play}
        setPlay={setPlay}
        setCurrentStep1={setCurrentStep1}
        setCurrentStep2={setCurrentStep2}
      />
    </StyledDrumMachine>
  );
};

export default DrumMachine;
