import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";

const CONSTANTS = {
  DELETING_SPEED: 200,
  TYPING_SPEED: 150,
};

const messages = [
  "International",
  "Steakhouse",
  "Asian",
  "Argentinian",
  "Indian",
  "Balti",
  "Pakistani",
  "British",
  "Vegan",
  "Dog Friendly",
];

const TypeWriter = () => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 1500);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <div>
      <h1 className='h1-container-2 header-grid'>
        {"I fancy"}&nbsp;
        <span className='h1-cuisine'>{state.text}</span>
        <span id='cursor' />
      </h1>
      <button
        className='nav-button button-grid'
        onClick={() => {
          navigate("/feed-me");
        }}>
        Feed Me
      </button>
    </div>
  );
};

export default TypeWriter;
