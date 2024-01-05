import React from "react";
import { NavLink } from "react-router-dom";

interface SelectQuizProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectQuizArr: number[];
  selectedCategory: string; // Add the selectedCategory prop
  totalQuestions: number; // Add the totalQuestions prop
}

const SelectQuiz: React.FC<SelectQuizProps> = SelectQuizProps => {
  const availableQuizLengths = SelectQuizProps.selectQuizArr.filter(
    length => length <= SelectQuizProps.totalQuestions
  );

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className="w-25 select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <NavLink
            to={`/quizes/${SelectQuizProps.selectedCategory}/questions/1`}
            key={index}
          >
            <button
              className="select-btns"
              onClick={e => SelectQuizProps.startQuiz(e)}
              value={choice}
            >
              {choice}
            </button>
          </NavLink>
        ))}

        <button
          className="select-btns"
          onClick={SelectQuizProps.startQuiz}
          value={SelectQuizProps.totalQuestions}
        >
          All ({SelectQuizProps.totalQuestions})
        </button>
      </div>
    </div>
  );
};
export default SelectQuiz;
