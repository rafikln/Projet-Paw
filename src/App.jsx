import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Etap01 from "../page1/etap01";
import Etap02 from "../page2/etap02";
import Etap03 from "../page3/page3";
import Page4  from "../page_prof/page4.jsx";
function App() {
  const [list,setliste]=useState({});
  return (
    <>
    
      <Routes>
        <Route path="formulaire/Etap01" element={<Etap01 setliste={setliste} />}></Route>
        <Route path="formulaire/Etap02" element={<Etap02 list={list} setliste={setliste} />}></Route>
        <Route path="formulaire/Etap03" element={<Etap03 />}></Route>
        <Route path="Liste/etudient" element={<Page4 />}></Route>
      </Routes>
    </>
  );
}

export default App;
