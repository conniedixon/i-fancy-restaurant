import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { getCuisines } from "../utils/utils";

const typewriterSpeeds = {
  deleting: 200,
  typing: 150,
};

const TypeWriter = () => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: typewriterSpeeds.typing,
  });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const cuisines = getCuisines();
    setMessages(cuisines);
    return () => {};
  }, []);

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs,
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
        ...cs,
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  const getCurrentText = (currentState) => {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  };

  const getMessage = (currentState, data) => {
    return data[Number(currentState.loopNum) % Number(data.length)];
  };

  const getTypingSpeed = (currentState) => {
    return currentState.isDeleting
      ? typewriterSpeeds.typing
      : typewriterSpeeds.deleting;
  };

  return (
    <div>
      <h1 className='h1-container-2 header-grid'>
        {"I fancy "}
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
