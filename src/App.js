import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
