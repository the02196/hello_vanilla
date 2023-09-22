import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Quick from "./pages/Quick";
import Login from "./pages/Login";
import AnimationTest from "./pages/AnimationTest";
import Test from "./pages/Test";
import Obsidian from "./pages/Obsidian";
import Jun_test from "./components/Jun_test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/quick" element={<Quick />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/animation" element={<AnimationTest />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/obsidian" element={<Obsidian />}></Route>
        <Route path="/jun" element={<Jun_test />}></Route>
      </Routes>
    </>
  );
}

export default App;
