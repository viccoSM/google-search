import Home from "./pages/home";
import Results from "./pages/results";

import './styles/global.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='search/*' element={<Results/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
