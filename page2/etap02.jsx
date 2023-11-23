import { useState } from "react";
import "./Etap02.css";
import { Link, useNavigate } from "react-router-dom";

function Etap02(props) {
  const [mat, setMat] = useState("");
  const [materrore, setMaterrore] = useState("");

  const [aff, setAff] = useState("");
  const [afferrore, setAfferrore] = useState("");

  const [ree, setRee] = useState("");
  const [reeerrore, setReeerrore] = useState("");
  let navigate = useNavigate("");


const [groupe, setGroupe] = useState("01");
const [module, setModule] = useState("SID");
const [nature, setNature] = useState("cc");

  return (
    <>
      <div className="boxone">
        <h1>1</h1>
      </div>
      <div className="trone"></div>
      <div className="boxtwo">
        <h1>2</h1>
      </div>
      <div className="trtwo"></div>
      <div className="boxtree">
        <h1>3</h1>
      </div>
      <div className="continer">
        <div className="left">
          <h1>Étape 2 :</h1>
          <h3>information sur le recours</h3>
        </div>
        <form
          action=""
          className="form2"
          onSubmit={async (e) => {
            e.preventDefault();

            const list = {
              ...props.list,
              matricule: mat,
              note_affiche: aff,
              note_reel: ree,
              module: module,
              nature: nature,
              groupe: groupe,
              status: false,
            };

            try {
              const res = await fetch("http://localhost:3001/recours", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(list),
              });

              if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Something went wrong");
              }
              navigate("../formulaire/Etap03");
            } catch (e) {
              console.error(e.message);
            }
          }}
        >
          <div className="top-botton1">
            <div className="top">
              <div className="input-left">
                <p>Matricule</p>
                <input
                  required
                  className={!materrore ? "" : "rede"}
                  type="number"
                  name=""
                  id=""
                  placeholder="ex :212131087566"
                  onBlur={() => {
                    if (!mat) setMaterrore("error");
                    else setMaterrore("");
                  }}
                  onChange={(e) => {
                    setMat(e.target.value);
                    setMaterrore("");
                  }}
                  
                />
                {materrore ? <span> vous avez oublier groupe</span> : ""}
              </div>
              <div className="input-right">
                <p>Groupe</p>
                <select value={groupe}  onChange={(e)=>
                {
                  setGroupe(e.target.value);
                }}>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                </select>
              </div>
            </div>

            <div className="centre">
              <div className="input-left">
                <p>Module</p>
                <select  value={module} onChange={(e)=>
                {
                  setModule(e.target.value);
                }}>
                  <option value="SAD">SAD</option>
                  <option value="SID">SID</option>
                  <option value="PAW">PAW</option>
                  <option value="IHM">IHM</option>
                  <option value="GL">GL</option>
                  <option value="ASI">ASI</option>

                </select>
              </div>
              <div className="input-right">
                <p>Nature</p>
                <select value={nature} onChange={(e)=>
                {
                  setNature(e.target.value);
                }} >
                  <option value="cc">cc</option>
                  <option value="exmen">exmen</option>
                </select>
              </div>
            </div>
            <div className="bottom">
              <div className="input-left">
                <p>Note Affiché</p>
                <input
                  required
                  className={!afferrore ? "" : "rede"}
                  type="number"
                  name=""
                  id=""
                  placeholder="ex :09"
                  onBlur={() => {
                    if (!aff) setAfferrore("error");
                    else setAfferrore("");
                  }}
                  onChange={(e) => {
                    setAff(e.target.value);
                    setAfferrore("");
                  }}
                />
                {afferrore ? <span>Vous avez oublier Note Affiché</span> : ""}
              </div>
              <div className="input-right">
                <p>Note Réels</p>
                <input
                  required
                  className={!reeerrore ? "" : "rede"}
                  type="number"
                  name=""
                  id=""
                  placeholder="ex :20"
                  onBlur={() => {
                    if (!ree) setReeerrore("error");
                    else setReeerrore("");
                  }}
                  onChange={(e) => {
                    setRee(e.target.value);
                    setReeerrore("");
                  }}
                />
                {reeerrore ? <span>Vous avez oublier Note Réels</span> : ""}
              </div>
            </div>
          </div>
          <button className="button1">Étapes suivants</button>
        </form>
      </div>
    </>
  );
}

export default Etap02;
