import react from "react";
import styles from "../Components/styles.css"

function Cards() {
  
  const TRANSLATION_MAP = {
    "Hello": "Bonjour",
    "Cat": "Chat",
    "Strawberry": "Fraise",
    "Boy": "Garçon",
    "I": "Je"
  }

  const SHUFFLE_ARRAY = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  const HANDLE_MATCH = () => {
    if()
  }

  const ENGLISH_WORDS = SHUFFLE_ARRAY(["Hello", "Cat", "Strawberry", "Boy", "I"]);
  const FRENCH_WORDS = SHUFFLE_ARRAY(["Bonjour", "Chat", "Fraise", "Garçon", "Je"]);

  return (
    <div className="button-container">
      <div className="button-wrapper">
        <button>{ENGLISH_WORDS[0]}</button>
        <button>{FRENCH_WORDS[0]}</button>
        <button>{ENGLISH_WORDS[1]}</button>
        <button>{FRENCH_WORDS[1]}</button>
        <button>{ENGLISH_WORDS[2]}</button>
        <button>{FRENCH_WORDS[2]}</button>
        <button>{ENGLISH_WORDS[3]}</button>
        <button>{FRENCH_WORDS[3]}</button>
        <button>{ENGLISH_WORDS[4]}</button>
        <button>{FRENCH_WORDS[4]}</button>
      </div>
    </div>
  )
};

export default Cards