import React from "react";
import { NavLink } from "react-router-dom";
import { categoryArr } from "../constants";
interface SelectCategoryProps {
  selectQuiz: (category: string, index: number) => void;
  startRandomQuiz: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <div className="w-25 select-btn-div">
        {categoryArr.map((category: string, index: number) => {
          return (
            <NavLink to={`/quizzes/${category}/questionsTotal`} key={index}>
              <button
                className="select-btns"
                onClick={() => SelectCategoryProps.selectQuiz(category, index)}
                value={category}
              >
                {category}
              </button>
            </NavLink>
          );
        })}
        <NavLink to={`/quizzes/Random/questionsTotal`}>
          <button
            className="select-btns"
            onClick={SelectCategoryProps.startRandomQuiz}
          >
            Random
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default SelectCategory;
