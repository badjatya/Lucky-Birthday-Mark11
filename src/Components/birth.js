import React, { useState } from "react";

// Importing Components
import Header from "./Header";

// Importing Images
import happy from "../img/happy.svg";
import sad from "../img/sad.svg";
import { div } from "prelude-ls";

export default function Birth() {
  const [birthdayDate, setBirthdayDate] = useState();
  const [luckyNumber, setLuckyNumber] = useState();
  const [isLucky, setIsLucky] = useState(null);

  // Submit
  const submitEventHandler = () => {
    const dateSum = birthdayDate.split("-").reduce((a, c) => {
      return Number(a) + Number(c);
    }, 0);

    const userLucky =
      Number(dateSum) % Number(luckyNumber) === 0 ? true : false;
    console.log("Is Lucky " + userLucky);
    setIsLucky(userLucky);
  };

  return (
    <div>
      <Header />

      <main className="main">
        <div className="form">
          <div className="inputContainer">
            <label htmlFor="birthdayDate">Enter Your Birth Day:</label>
            <input
              type="date"
              id="birthdayDate"
              onChange={(e) => setBirthdayDate(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="luckyNumber">Your Lucky Number:</label>
            <input
              type="number"
              id="luckyNumber"
              onChange={(e) => setLuckyNumber(e.target.value)}
            />
          </div>

          <div className="buttonContainer">
            <span onClick={submitEventHandler}>Check if you're lucky</span>
          </div>
        </div>
        {isLucky && (
          <div>
            <img src={happy} alt="happy" />
            <p>You're birthday is Lucky</p>
          </div>
        )}
        {isLucky === false ? (
          <div>
            <img src={sad} alt="sad" />
            <p>You're birthday is not lucky</p>
          </div>
        ) : null}
      </main>

      <footer className="footer">
        <ul className="footer-list">
          <li className="list-item">
            <a className="list-link" href="https://instagram.com/badjatya">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-item">
            <a className="list-link" href="https://twitter.com/ArchitBadjatya">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-item">
            <a className="list-link" href="https://linkedin.com/in/badjatya">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <small>&copy;Badjatya 2020 </small>
      </footer>
    </div>
  );
}
