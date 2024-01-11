import React from "react";
import { NavLink } from "react-router-dom";
interface SelectCategoryProps {
  selectCategoryArr: string[];
  selectQuiz: (category: string, index: number) => void;
  selectQuizNumber: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    category: string
  ) => void;
  startRandomQuiz: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <div className="w-25 select-btn-div">
        {SelectCategoryProps.selectCategoryArr.map(
          (category: string, index: number) => {
            return (
              <NavLink to={`/quizzes/${category}/questionsTotal`} key={index}>
                <button
                  className="select-btns"
                  onClick={() =>
                    SelectCategoryProps.selectQuiz(category, index)
                  }
                  value={category}
                >
                  {category}
                </button>
              </NavLink>
            );
          }
        )}
        <button
          className="select-btns"
          onClick={SelectCategoryProps.startRandomQuiz}
        >
          Random
        </button>
      </div>
    </div>
  );
};
export default SelectCategory;
