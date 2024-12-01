import React from "react";
import { CATEGORIES } from "../constants";
import SelectOptions from "./SelectOptions";

interface SelectCategoryProps {
  selectQuiz: (category: string, index: number) => void;
  startRandomQuiz: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <SelectOptions
        list={CATEGORIES}
        groupName="categories"
        onChange={category =>
          category === "Random"
            ? SelectCategoryProps.startRandomQuiz()
            : SelectCategoryProps.selectQuiz(category, 0)
        }
      />
    </div>
  );
};
export default SelectCategory;
