import { useState } from "react";
import "./etap01.css";
import { Link, useNavigate } from "react-router-dom";

function Etap01(props) {
  const [nom, setnom] = useState("");
  const [nomerror, setNomerror] = useState("");
  const [prenom, setprenom] = useState("");
  const [prenomerror, setPrenomerror] = useState("");
  const [mail, setmail] = useState("");
  const [mailerror, setMailerror] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <div className="box1">
        <h1>1</h1>
      </div>
      <div className="tr1"></div>
      <div className="box2">
        <h1>2</h1>
      </div>
      <div className="tr2"></div>
      <div className="box3">
        <h1>3</h1>
      </div>

      <div className="continer">
        <div className="left">
          <h1>Étape 1 :</h1>
          <h3>information sur l'étudiant</h3>
        </div>
        <form
          className="form1"
          onSubmit={(e) => {
            e.preventDefault(); 
            props.setliste({
              nom: nom,
              prenom: prenom,
              email: mail,
            });
            navigate("../formulaire/Etap02");

          }}
          action=""
        >
          <div className="top-botton">
            <div className="nom">
              <p>Nom:</p>
              <input
                className={!nomerror ? "" : "rede"}
                type="text"
                required
                maxLength={12}
                onChange={(e) => {
                  setnom(e.target.value);
                  setNomerror("");
                }}
                onBlur={() => {
                  if (!nom) setNomerror("error");
                  else setNomerror("");
                }}
                placeholder="Nom"
              />
              {nomerror ? <span>vous avez oubiler le nom</span> : ""}
            </div>
            <div className="prenom">
              <p>Prénom:</p>
              <input
                type="text"
                required
                className={!prenomerror ? "" : "rede"}
                onChange={(e) => {
                  setprenom(e.target.value);
                  setPrenomerror("");
                }}
                placeholder="Prénom"
                onBlur={() => {
                  if (!prenom) setPrenomerror("error");
                  else setPrenomerror("");
                }}
              />
              {prenomerror ? <span>vous avez oubiler le prénom</span> : ""}
            </div>
            <div className="mail">
              <p>Mail:</p>
              <input
                type="text"
                required
                className={!mailerror ? "" : "rede"}
                onChange={(e) => {
                  setmail(e.target.value);
                  setMailerror("");
                }}
                onBlur={() => {
                  if (!mail) setMailerror("error");
                  else setMailerror("");
                }}
                placeholder="user@example.com"
              />
              {mailerror ? <span>vous avez oubiler le email</span> : ""}
            </div>
          </div>

          <button className="button1">Étapes suivants</button>
        </form>
      </div>
    </>
  );
}

export default Etap01;
