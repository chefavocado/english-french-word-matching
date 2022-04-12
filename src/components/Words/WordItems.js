import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

import Card from "../UI/Card";
import classes from "./WordItems.module.css";

const WordItems = props => {
  const [clickedCards, setClickedCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [shuffledWordsEn, setShuffledWordsEn] = useState([
    {
      key: "ew1",
      word: "Hello",
      type: "1",
      active: true,
    },
    {
      key: "ew2",
      word: "Cat",
      type: "2",
      active: true,
    },
    {
      key: "ew3",
      word: "Strawberry",
      type: "3",
      active: true,
    },
    {
      key: "ew4",
      word: "Boy",
      type: "4",
      active: true,
    },
    {
      key: "ew5",
      word: "I",
      type: "5",
      active: true,
    },
  ]);
  const [shuffledWordsFr, setShuffledWordsFr] = useState([
    {
      key: "fw1",
      word: "Bonjour",
      type: "1",
      active: true,
    },
    {
      key: "fw2",
      word: "Chat",
      type: "2",
      active: true,
    },
    {
      key: "fw3",
      word: "Fraise",
      type: "3",
      active: true,
    },
    {
      key: "fw4",
      word: "Garçon",
      type: "4",
      active: true,
    },
    {
      key: "fw5",
      word: "Je",
      type: "5",
      active: true,
    },
  ]);

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

  const evaluate = () => {
    const [first, second] = clickedCards;
    if (
      translationMap[`${first}`] === second ||
      getKeyByValue(translationMap, `${first}`) === second
    ) {
      setClearedCards(prev => ({ ...prev, [first]: true, [second]: true }));
      // setClickedCards([]);
      // console.log("It works!");
    }
  };
  // console.log(clearedCards);
  // console.log(clickedCards);

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
    setShuffledWordsEn(shuffleArray(shuffledWordsEn));
    setShuffledWordsFr(shuffleArray(shuffledWordsFr));
  }, []);
  // console.log(shuffledWordsEn)

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

export default WordItems;
