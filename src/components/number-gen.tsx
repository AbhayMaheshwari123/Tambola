import React, { useState } from 'react';
import random from "lodash.random";
import Display from './displayNumber';
interface IState {
    prevNumber: null | number;
    currentNumber: null | number;
    pickedNumbers: number[];
  }
const NumberGen=()=>{
    const [state, setState] = useState<IState>({
        prevNumber: null,
        currentNumber: 0,
        pickedNumbers: [],
    });

    const generateNumber = () => {
        const randomNumber = random(1, 90);
        if (state.pickedNumbers.includes(randomNumber)){
          generateNumber();
        } else {
          setState({
            prevNumber: state.currentNumber,
            currentNumber: randomNumber,
            pickedNumbers: [...state.pickedNumbers, randomNumber],
          });
        };
    };
    return(
        <Display
        prevNumber={state.prevNumber}
        currentNumber={state.currentNumber}
        generateNumber={generateNumber}
        />
    )
};



export default NumberGen;