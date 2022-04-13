import { useState, useEffect } from "react";

import Card from "../UI/Card";
import classes from "./Words.module.css";
import wordsEn from "../../data/english";
import wordsFr from "../../data/french";

const Words = props => {
  // const [showModal, setShowModal] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shuffledWordsEn, setShuffledWordsEn] = useState([]);
  const [shuffledWordsFr, setShuffledWordsFr] = useState([]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const translationMap = {
    Hello: "Bonjour",
    Cat: "Chat",
    Strawberry: "Fraise",
    Boy: "Garçon",
    I: "Je",
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  };

  const evaluate = (props) => {
    const [first, second] = clickedCards;
    if (
      translationMap[`${first}`] === second ||
      getKeyByValue(translationMap, `${first}`) === second
    ) {
      setClearedCards(prev => ({ ...prev, [first]: true, [second]: true }));
    }
  };

  console.log(clearedCards);

  const cardClickHandler = e => {
    const word = e.target.id;
    if (clickedCards.length === 1) {
      setClickedCards(prev => [...prev, word]);
    } else {
      setClickedCards([word]);
    }
  };

  useEffect(() => {
    if (clickedCards.length === 2) {
      setTimeout(evaluate);
    }
  }, [clickedCards]);

  useEffect(() => {
    setShuffledWordsEn(shuffleArray(wordsEn));
    setShuffledWordsFr(shuffleArray(wordsFr));
  }, []);

  useEffect(() => {
    const clearedWordsLength = Object.keys(clearedCards).length;

    if(clearedWordsLength === 10) {
      return props.showModal(true);
    }
  }, [clearedCards]);

  const mappedWordsEn = shuffledWordsEn.map(wordEn => (
    <Card
      className={
        !clearedCards[wordEn.word] ? classes.word : classes["word-paired"]
      }
      onClick={!clearedCards[wordEn.word] ? cardClickHandler : null}
      key={wordEn.key}
    >
      <li id={wordEn.word}>{wordEn.word}</li>
    </Card>
  ));

  const mappedWordsFr = shuffledWordsFr.map(wordFr => (
    <Card
      className={
        !clearedCards[wordFr.word] ? classes.word : classes["word-paired"]
      }
      onClick={!clearedCards[wordFr.word] ? cardClickHandler : null}
      key={wordFr.key}
    >
      <li id={wordFr.word}>{wordFr.word}</li>
    </Card>
  ));

  return (
    <div className={classes.row}>
      <ul className={classes.column}>{mappedWordsEn}</ul>
      <ul className={classes.column}>{mappedWordsFr}</ul>
    </div>
  );
};

export default Words;
