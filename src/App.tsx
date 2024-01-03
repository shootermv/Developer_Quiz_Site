import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import QuizTemplate from "./components/QuizTemplate";
import React, { useState } from "react";

const App: React.FC = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => setIsHomePage(!isHomePage);
  return (
    <Routes>
      <Route path="/" element={<WelcomePage start={toggleHomePage} />} />
      <Route path="/quizes" element={<QuizTemplate home={toggleHomePage} />} />
    </Routes>
  );
};
export default App;
/*
      <Routes>
        <Route path="/" element={<CommitsPage />} />
        <Route
          path="/prs"
          element={
            <Suspense fallback={<Loader />}>
              <PrsPage />
            </Suspense>
          }
        />
      </Routes>
*/
