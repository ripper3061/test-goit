import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import TweetsPage from "./pages/tweetsPage";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
}
