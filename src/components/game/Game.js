import React, { useState, useEffect, useCallback } from "react";
import Balloon from "../balloon/Balloon";
import generateRandomNumbers from "../../function/generateRandomNumbers";

const balloonColors = ["red", "blue", "green", "yellow"];

const operationTypes = ["+", "-", "×", "÷"]; // Define the operation types

const getRandomOperation = () => {
  const randomIndex = Math.floor(Math.random() * operationTypes.length);
  return operationTypes[randomIndex];
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const generateOffsets = (correctAnswer) => {
  const offsets = {};
  balloonColors.forEach((color) => {
    offsets[color] = [];
    for (let i = -3; i <= 3; i++) {
      // Exclude the correct answer from the offsets
      if (i !== 0) {
        offsets[color].push(correctAnswer + i);
      }
    }
    shuffleArray(offsets[color]);
  });
  return offsets;
};

export default function Game() {
  const [score, setScore] = useState(0);
  const [operation, setOperation] = useState(getRandomOperation());
  const [correctBalloonColor, setCorrectBalloonColor] = useState(
    balloonColors[Math.floor(Math.random() * balloonColors.length)]
  );
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [randomNums, setRandomNums] = useState({});
  const [offsets, setOffsets] = useState(generateOffsets());

  useEffect(() => {
    const newRandomNums = generateRandomNumbers(operation, score);
    const correctAnswer = newRandomNums.answer;
    setCorrectAnswer(correctAnswer);
    setRandomNums(newRandomNums);
    setOffsets(generateOffsets(correctAnswer));
  }, [operation, score]);

  const handleOperationChange = (newOperation) => {
    setOperation(newOperation);
    setCorrectBalloonColor(
      balloonColors[Math.floor(Math.random() * balloonColors.length)]
    );
    setScore(0);
  };

  const handlePop = useCallback(
    (color) => {
      if (color === correctBalloonColor) {
        setScore(score + 1);
        setCorrectBalloonColor(
          balloonColors[Math.floor(Math.random() * balloonColors.length)]
        );
      }
    },
    [correctBalloonColor, score]
  );

  return (
    <div>
      {operationTypes.map((op) => (
        <button
          key={op}
          onClick={() => handleOperationChange(op)}
          style={{ margin: "1rem", width: "2rem", textAlign: "center" }}
        >
          {op}
        </button>
      ))}<hr></hr>
      <h1>Find the right EGG:</h1>
      <div><hr></hr>
        <p style={{ fontSize: "8rem" }}>
          {`${randomNums.val1} ${operation} ${randomNums.val2}`}
        </p>
      </div>
      <div className="balloon-container" style={{ display: "inline-flex" }}>
        {balloonColors.map((color) => {
          let answer;
          if (color === correctBalloonColor) {
            answer = correctAnswer;
          } else {
            answer = offsets[color].pop();
          }

          return (
            <Balloon
              key={color}
              color={color}
              onClick={() => handlePop(color)}
              isCorrectBalloon={color === correctBalloonColor}
              answer={answer}
            />
          );
        })}
      </div><hr></hr>
      <p style={{ fontSize: "2rem" }}>Score: {score}</p>
    </div>
  );
}
