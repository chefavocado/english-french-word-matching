import React from "react";
import styles from "../Components/styles.css"

function Cards() {
  const ENGLISH_WORDS = ["Hello", "Cat", "Strawberry", "Boy", "I"]
  const FRENCH_WORDS = ["Bonjour", "Chat", "Fraise", "Garçon", "Je"]

  function handleClick(e) {
    e.target.style.backgroundColor = "violet"; //with this line of code, e(the event, a click), targets the elements style and updates its background colour.  
    e.target.style.color = "white";

    
  }

  return (
    <div className="button-container">
      <div className="button-wrapper">
        <button onClick={handleClick}>{ENGLISH_WORDS[0]}</button>
        <button onClick={handleClick}>{FRENCH_WORDS[3]}</button>
        <button onClick={handleClick}>{ENGLISH_WORDS[1]}</button>
        <button onClick={handleClick}>{FRENCH_WORDS[4]}</button>
        <button onClick={handleClick}>{ENGLISH_WORDS[2]}</button>
        <button onClick={handleClick}>{FRENCH_WORDS[1]}</button>
        <button onClick={handleClick}>{ENGLISH_WORDS[3]}</button>
        <button onClick={handleClick}>{FRENCH_WORDS[2]}</button>
        <button onClick={handleClick}>{ENGLISH_WORDS[4]}</button>
        <button onClick={handleClick}>{FRENCH_WORDS[0]}</button>
      </div>
    </div>
  )
};

export default Cards    