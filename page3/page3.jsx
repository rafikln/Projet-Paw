import { useState } from "react";
import "./page3.css";
import { Link, useNavigate } from "react-router-dom";
import ver from "./coche.png"

const Etap03 = () => {
  return (
    <>
      <div className="box1">
        <h1>1</h1>
      </div>
      <div className="tr1 trone"></div>
      <div className="box2 boxtwo">
        <h1>2</h1>
      </div>
      <div className="tr2 trone "></div>
      <div className="box3 boxtwo">
        <h1>3</h1>
      </div>
      <div className="continer continerr    ">
         <img src={ver} alt="" className="ver" />
         <h1>
         Votre demande est bien reçue
         </h1>
        </div>
      
    </>
  );
};
export default Etap03;
