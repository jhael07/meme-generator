import Data from "./memeData.js";
import { useState } from "react";

let url;

const Generator = () => {
  let [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(e) {
    setMemeImage((prevImage) => ({
      ...prevImage,
      [e.target.name]: e.target.value,
    }));
  }
  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = Data.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMemeImage((prevImage) => {
      return {
        ...prevImage,
        randomImage: url,
      };
    });
  }

  return (
    <div className="inputs">
      <form onSubmit={getMemeImage}>
        <div className="form-input">
          <input
            type="text"
            placeholder="type something"
            name="topText"
            id="inputUp"
            value={memeImage.topText}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="type something"
            name="bottomText"
            id="inputDown"
            value={memeImage.bottomText}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <button>Generated Meme 🖼️</button>
          <br />
          <br />

          {memeImage.randomImage !== "" ? (
            <div className="meme">
              <p className="up">{memeImage.topText}</p>
              <img src={memeImage.randomImage} className="image"></img>
              <p className="down">{memeImage.bottomText}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default Generator;
