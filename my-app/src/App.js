import React, { useState } from "react";
import "./index.css";

let emojiDictionary = {
  "😂": "laughing",
  "😭": "crying",
  "👌": "ok hand",
  "🤔": "thinking",
  "🙄": "face with rolling eyes",
  "😌": "relieved",
  "😩": "weary",
  "💯": "hundred points",
  "😜": "winking face with tounge",
  "🙌": "raising Hands",
  "👀": "eyes",
  "🔥": "fire",
  "😄": "grinning Face with smiling eyes",
  "🙊": "speak no evil monkey",
  "😕": "confused",
  "😝": "squinting with tounge",
  "🌸": "cherry blossom",
  "😞": "tired",
  "😃": "grinning",
  "🤦": "person facepalming",
};

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  };
  const emojiClickHandler = (emoji) => {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1>emoji interpreter</h1>
      <span style={{ fontSize: "small" }}>
        developed using ReactJS by{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://twitter.com/OmGaikwad_"
        >
          {" "}
          om{" "}
        </a>
      </span>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>

      <h3>emoji's we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
