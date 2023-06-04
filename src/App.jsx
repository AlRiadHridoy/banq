
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Waitlist from "./pages/Waitlist";
function App() {

  return (
    <div className="App dark:bg-main dark:text-white bg-slate-50 text-main transition-all duration-200 font-normal relative overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
