import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
