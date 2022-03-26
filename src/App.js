import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<div>Каталог</div>} />
        <Route path="/:title" element={<div>Тайтл</div>} />
      </Routes>
    </Router>
  );
}

export default App;
