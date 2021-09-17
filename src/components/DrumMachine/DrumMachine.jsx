import React, { useState, useEffect } from "react";

import { StyledDrumMachine } from "../styled/StyledDrumMachine/StyledDrumMachine";
import DrumPads from "./DrumPads/DrumPads";
import Controls from "./Controls/Controls";
import PadControls from "./PadControls/PadControls";

import { padset, padSet1, padSet2, padSet3 } from "../../data/padSet1";

const DrumMachine = ({
  play,
  setPlay,
  tempo,
  selectedSound1,
  selectedSound2,
  selectedSound3,
  setSelectedSound1,
  setSelectedSound2,
  setSelectedSound3,
  sounds,
}) => {
  //const [pads, setPads] = useState(padset);
  const [pads1, setPads1] = useState(padSet1);
  const [pads2, setPads2] = useState(padSet2);
  const [pads3, setPads3] = useState(padSet3);
  const [currentStep1, setCurrentStep1] = useState(0);
  const [currentStep2, setCurrentStep2] = useState(0);
  const [currentStep3, setCurrentStep3] = useState(0);

  // useEffect(() => {
  //   if (play) {
  //     const interval = setInterval(() => {
  //       if (currentStep1 < pads[0].padSet1.length - 1) {
  //         setCurrentStep1((currentStep1) => currentStep1 + 1);
  //       } else {
  //         setCurrentStep1(0);
  //       }
  //     }, tempo);

  //     return () => clearInterval(interval);
  //   }
  // }, [currentStep1, play, tempo]);

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
  }, [currentStep1, play, tempo]);

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
  }, [currentStep2, play, tempo]);

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        if (currentStep3 < pads3.length - 1) {
          setCurrentStep3((currentStep3) => currentStep3 + 1);
        } else {
          setCurrentStep3(0);
        }
      }, tempo);

      return () => clearInterval(interval);
    }
  }, [currentStep3, play, tempo]);

  // console.log(pads1);
  // console.log(pads[0].padSet1);

  return (
    <StyledDrumMachine>
      <DrumPads
        pads={pads1}
        setPads={setPads1}
        currentStep={currentStep1}
        play={play}
        selectedSound={selectedSound1}
        setSelectedSound={setSelectedSound1}
        sounds={sounds}
      />
      <PadControls pads={pads1} setPads={setPads1} />
      <DrumPads
        pads={pads2}
        setPads={setPads2}
        currentStep={currentStep2}
        play={play}
        selectedSound={selectedSound2}
        setSelectedSound={setSelectedSound2}
        sounds={sounds}
      />
      <PadControls pads={pads2} setPads={setPads2} />
      <DrumPads
        pads={pads3}
        setPads={setPads3}
        currentStep={currentStep3}
        play={play}
        selectedSound={selectedSound3}
        setSelectedSound={setSelectedSound3}
        sounds={sounds}
      />
      <PadControls pads={pads3} setPads={setPads3} />
      <Controls
        play={play}
        setPlay={setPlay}
        setCurrentStep1={setCurrentStep1}
        setCurrentStep2={setCurrentStep2}
        setCurrentStep3={setCurrentStep3}
      />
    </StyledDrumMachine>
  );
};

export default DrumMachine;
