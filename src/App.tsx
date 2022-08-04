import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import GlobalStyles from "./styles/GlobalStyles";

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:name" element={<Detail/>} />
      </Routes>
      <GlobalStyles/>
    </Router>
  );
}

export default App;
