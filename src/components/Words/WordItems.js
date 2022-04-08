import { useState } from "react";

import Card from "../UI/Card";
import classes from "./WordItems.module.css";

const WordItems = props => {
  const [clickedWords, setClickedWords] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [showModal, setShowModal] = useState(false);

  const translationMap = {
    Hello: "Bonjour",
    Cat: "Chat",
    Strawberry: "Fraise",
    Boy: "Garçon",
    I: "Je",
  };

  const englishWords = ["Hello", "Cat", "Strawberry", "Boy", "I"];
  const frenchWords = ["Bonjour", "Chat", "Fraise", "Garçon", "Je"];
  const shuffledWordsEn = englishWords.sort((a, b) => 0.5 - Math.random());
  const shuffledWordsFr = frenchWords.sort((a, b) => 0.5 - Math.random());

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  };

  const cardClickHandler = e => {
    const word = e.target.id;
    console.log(word);
  };

  const mappedWordsEn = shuffledWordsEn.map(wordEn => (
    <Card
      className={classes.text}
      onClick={cardClickHandler}
      key={Math.random()}
    >
      <li id={wordEn}>{wordEn}</li>
    </Card>
  ));

  const mappedWordsFr = shuffledWordsFr.map(wordFr => (
    <Card
      className={classes.text}
      onClick={cardClickHandler}
      key={Math.random()}
    >
      <li id={wordFr}>{wordFr}</li>
    </Card>
  ));

  return (
    <div className={classes.row}>
      <ul className={classes.column}>{mappedWordsEn}</ul>
      <ul className={classes.column}>{mappedWordsFr}</ul>
    </div>
  );
};

export default WordItems;
