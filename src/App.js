import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "smilling",
  "🤣": "laughfing",
  "😡": "angry",
  "💋": "kiss",
  "👩‍🍳": "chef",
  "👨‍👩‍👦": "family",
  "👨🏼‍✈️": "officer"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, set] = useState("");
  function emojiinputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    console.log(meaning);
    if (meaning === undefined) {
      meaning = "we dont have in our data base";
    }
    set(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    set(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Interpreter</h1>
      <input onChange={emojiinputChangeHandler}></input>
      <h2> {meaning} </h2>
      <h3> Emoji we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}