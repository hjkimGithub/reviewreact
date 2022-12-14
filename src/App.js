import { Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
      <Routes>
        {/* <Route path="/hello" element={} /> */}
        <Route path="/" element={<Home />}  />
        <Route path=":id"  element={<Detail />}/>
      </Routes>
  );
}

export default App;