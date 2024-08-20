import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StartingPage from "./components/StartingPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import MatchingList from "./components/Matchings/MatchingList.jsx";
import "./App.css";
import PersonalDetail from "./components/Matchings/PersonalDetail.jsx";
import MatchingDetail from "./components/Matchings/MatchingDetail.jsx";
import MyPage from "./components/MyPage/MyPage.jsx";
import ProfileSettingPage from "./components/ProfileSettingPage.jsx";

function App() {
  return (
    <div class="App">
    <BrowserRouter>
    <Routes>
    <Route index element={<StartingPage/>}/>
    <Route path="login" element={<LoginPage/>}/>
    <Route path="register" element={<RegisterPage/>}/>
    <Route path="matchinglist" element={<MatchingList/>}/>
    <Route path="matchinglist/matchingdetail" element={<MatchingDetail/>}/>
    <Route path="matchinglist/matchingdetail/personaldetail" element={<PersonalDetail/>}/>
    <Route path="mypage" element={<MyPage/>}/>
    <Route path="mypage/profilesettingpage" element={<ProfileSettingPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
