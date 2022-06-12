# Word Matching (English & French)

## Overview

Insired by Duolingo, the goal of this project was to create a fun game to practice my React skills while learning French simultaneously! Two columns are displayed. The column on the left contains a list of unqiue english words while the column on the right contains a list of their french counter parts. The objective of the of game is to match the words correctly in any order, english with french or vice versa. If the words are paired correctly, they change in appearance to indicate so and become disabled preventing the user from reselect them. If they are paired incorrectly, the selected words will flash red to indicate the incorrect pairing to the user and unselect them so they can try again. Once all 10 words are correctly matched, a modal is diaplyed to congradualte the user for their efforts. The modal also displays a restart button. If clicked, the game restarts and the words are shuffled in a different order.

## What I Learned

In this project I incorporated a portal for the first time for a clean and simple way to display a modal on the page to "break out" of it's parent component. It's easy to build a portal and make it reusable to serve more than one purpose if needed (examples: dialogs, tool tips, etc.)

I gained additional experience managaging state with objects and arrays while building out the logic responsible for shuffling the french and english words and keeping track of selected/matched words. 

This was the first project where I used the useEffect hook to evaluate matched words and determine if they are truthy or falsy. I also used this hook for the word shuffling and modal toggle logic. 

To ensure the user can match english and french words in any order (english with french or vice versa), I created a translation map object. I then created a function which returns an object key based on the provided value. The function accepts two arguments: an object and a value. If the value strickly equals a key's value in the object, the function will return the name of the key. This is crucial to successfully allow the user to pair words in any order. The reason being is because, it allows the selected words to be evaluated with the translation map object with the key or the value. Prior to building this project, I only knew how to obtain values with keys instead of the otherway around so this was a fun learning experience. 

For the evaluation logic I wrote to determine if words were matched correctly, I gained additional experience with template literals and the built-in setTimeout method to dynamically evaluate any word pairing and determine if the pairing was truthy or falsy to reflect the appropriate styling change. 

I incorporated the ternary operator for the first time to dynamically change styling based on state changes. This is a fun easy-to-read approach compared to traditional if/else statements.

## Technologies

HTML, CSS, JaveScript, React
