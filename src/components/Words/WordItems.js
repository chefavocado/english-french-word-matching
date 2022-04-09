import { useState, useEffect} from "react";

import Card from "../UI/Card";
import classes from "./WordItems.module.css";

const WordItems = props => {
  const [isActive, setIsActive] = useState(true);
  const [clickedWords, setClickedWords] = useState([]);
  const [clearedCards, setClearedWords] = useState({});
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

  const evaluate = () => {
    const [first, second] = clickedWords;
    if (
      translationMap[`${first}`] === second ||
      getKeyByValue(translationMap, `${first}`) === second
    ) {
      // setClearedWords((prev) => )
      console.log("It works!");
    }
  };

  const cardClickHandler = e => {
    const word = e.target.id;
    if (clickedWords.length === 1) {
      setClickedWords(prev => [...prev, word]);
    } else {
      setClickedWords([word]);
    }
  };

  useEffect(() => {
    if (clickedWords.length === 2) {
      setTimeout(evaluate);
    }
  });

  const checkIsActiveHandler = key => {};

  const mappedWordsEn = shuffledWordsEn.map(wordEn => (
    <Card
      className={isActive ? classes.word : classes["word-paired"]}
      onClick={cardClickHandler}
      key={wordEn}
    >
      <li id={wordEn}>{wordEn}</li>
    </Card>
  ));

  const mappedWordsFr = shuffledWordsFr.map(wordFr => (
    <Card
      className={isActive ? classes.word : classes["word-paired"]}
      onClick={cardClickHandler}
      key={wordFr}
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
