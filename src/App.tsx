import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import QuizTemplate from "./components/QuizTemplate";
import React from "react";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/quizes/*" element={<QuizTemplate />} />
    </Routes>
  );
};
export default App;
