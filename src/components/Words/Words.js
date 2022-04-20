import { useState, useEffect } from "react";

import Card from "../UI/Card";
import classes from "./Words.module.css";
import wordsEn from "../../data/english";
import wordsFr from "../../data/french";

const Words = props => {
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffledWordsEn, setShuffledWordsEn] = useState([]);
  const [shuffledWordsFr, setShuffledWordsFr] = useState([]);

  const clearedCardsObj = props.setClearedCards;

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

  const evaluate = props => {
    const [first, second] = clickedCards;
    const wordOne = document.getElementById(first);
    const wordTwo = document.getElementById(second);

    const backToDefault = () => {
      wordOne.style.background = "white";
      wordTwo.style.background = "white";
    };

    if (
      translationMap[`${first}`] === second ||
      getKeyByValue(translationMap, `${first}`) === second
    ) {
      clearedCardsObj(prev => ({
        ...prev,
        [first]: true,
        [second]: true,
      }));
    } else if (
      translationMap[`${first}`] !== second ||
      getKeyByValue(translationMap, `${first}`) !== second
    ) {
      wordOne.style.background = "crimson";
      wordTwo.style.background = "crimson";

      setTimeout(backToDefault, 1000);
    }
  };

  const cardClickHandler = e => {
    const word = e.target.id;

    const cardBackgroundColour = () => {
      document.getElementById(word).style.background = "#dee6b4";
    };

    cardBackgroundColour();

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
    const clearedWordsLength = Object.keys(props.clearedCards).length;

    if (clearedWordsLength === 10) {
      return props.showModal(true);
    }
  }, [props.clearedCards]);

  const mappedWordsEn = shuffledWordsEn.map(wordEn => (
    <Card
      className={
        !props.clearedCards[wordEn.word]
          ? classes.word
          : classes["word__paired"]
      }
      onClick={!props.clearedCards[wordEn.word] ? cardClickHandler : null}
      key={wordEn.key}
      id={wordEn.word}
    >
      <li id={wordEn.word}>{wordEn.word}</li>
    </Card>
  ));

  const mappedWordsFr = shuffledWordsFr.map(wordFr => (
    <Card
      className={
        !props.clearedCards[wordFr.word]
          ? classes.word
          : classes["word__paired"]
      }
      onClick={!props.clearedCards[wordFr.word] ? cardClickHandler : null}
      key={wordFr.key}
      id={wordFr.word}
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
