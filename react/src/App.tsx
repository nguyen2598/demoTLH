import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ChartPage, Home, NotFound } from "./pages";
import { Header } from "./components";
import PublicPage from "./pages/public/PublicPage/PublicPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<PublicPage />}>
          <Route path="home" element={<Home />} />
          <Route path="not-found" element={<NotFound />} />
        </Route>
        <Route path="admin" element={<ChartPage />} />
      </Routes>
    </div>
  );
}

export default App;
