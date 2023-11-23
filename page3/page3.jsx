import { useState } from "react";
import "./page3.css";
import { Link, useNavigate } from "react-router-dom";
import ver from "./coche.png"

const Etap03 = () => {
  return (
    <>
      <div className="boxun">
        <h1>1</h1>
      </div>
      <div className="trun"></div>
      <div className="boxdeux">
        <h1>2</h1>
      </div>
      <div className="trdeux"></div>
      <div className="boxtroix">
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
