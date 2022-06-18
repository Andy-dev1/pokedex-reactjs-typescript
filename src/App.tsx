import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:name" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
