import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
      <Routes>
        {/* <Route path="/hello" element={} /> */}
        <Route path="/movie"  element={<Detail />}/>
        <Route path="/" element={<Home />}  />
      </Routes>
  );
}

export default App;