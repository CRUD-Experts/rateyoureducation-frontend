import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Pages/Layouts/MainLayout";
import { Home } from "./Pages/Public/Home";
// import { Rankings } from "./Pages/Public/Rankings";
import { Comparison } from "./Pages/Public/Comparison";
import { Methodology } from "./Pages/Public/Methodology";
import Signup from "./Pages/Public/Signup";
// import { UniRankings } from "./Pages/Public/UniRankings";
import { ScholarRankings } from "./Pages/Public/ScholarRankings";
import { RankingsLayout } from "./Pages/Layouts/RankingsLayout";
import UniversityRanking from "./components/UniversityRanking";

function App() {
  return (
    <div className="text-primary-900 bg-light-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="rankings" element={<RankingsLayout />} >
              <Route path="universities" element={<UniversityRanking limit={10} hasImages={false} hasButton={false} />} />
              <Route path="scholars" element={<ScholarRankings />} />
            </Route>
            <Route path="comparison" element={<Comparison />} />
            <Route path="methodology" element={<Methodology />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
