import React, { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ALL_CATEGORIES } from "../constants";

interface SelectQuizProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectQuizArr: number[];
}

const SelectQuizTotal: React.FC<SelectQuizProps> = SelectQuizProps => {
  const { category } = useParams();
  const totalQuestions = useMemo(
    () => ALL_CATEGORIES.filter(q => q.Category === category),
    [category]
  );
  const availableQuizLengths = useMemo(
    () =>
      SelectQuizProps.selectQuizArr.filter(
        length => length <= totalQuestions.length
      ),
    [totalQuestions]
  );
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className="w-25 select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <NavLink
            to={`/quizzes/${category}/questions/1/of/${choice}`}
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
          value={totalQuestions.length}
        >
          All ({totalQuestions.length})
        </button>
      </div>
    </div>
  );
};
export default SelectQuizTotal;
