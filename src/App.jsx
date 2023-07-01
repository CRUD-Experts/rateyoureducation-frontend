import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Pages/Layouts/MainLayout";
import { Home } from "./Pages/Public/Home";
// import { Rankings } from "./Pages/Public/Rankings";
import { Comparison } from "./Pages/Public/Comparison";
import { Methodology } from "./Pages/Public/Methodology";
import Signup from "./Pages/Public/Signup";
// import { UniRankings } from "./Pages/Public/UniRankings";
import { RankingsLayout } from "./Pages/Layouts/RankingsLayout";
import UniversityRanking from "./components/UniversityRanking";
import { LecturerRanking } from "./components/LecturerRanking";

function App() {
  return (
    <div className="text-primary-900 bg-light-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="rankings" element={<RankingsLayout />} >
              <Route path="universities" element={<UniversityRanking limit={10} hasImages={false} hasButton={false} animate={false} />} />
              <Route path="scholars" element={<LecturerRanking limit={10} hasButton={false} hasImage={false} animate={false} />} />
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
