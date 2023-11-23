import { useState, useEffect } from "react";
import "./page4.css";

const Liste = (props) => {
  return (
    <>
      <tr>
        <td>
          <span>#{props.matricule}</span>
        </td>
        <td>{props.nom} </td>
        <td>{props.prenom}</td>
        <td>{props.mail}</td>
        <td>{props.groupe}</td>
        <td>{props.module} </td>
        <td>{props.nature}</td>
        <td>
          {props.noter} <span>/ 20</span>
        </td>
        <td>
          {props.notea} <span>/ 20</span>
        </td>
        <td>
          {props.status ? (
            <button className="two" onClick={props.onclick}>
              Favorable
            </button>
          ) : (
            <button className="one" onClick={props.onclick}>
              Défavorable
            </button>
          )}
        </td>
        <td>
          <button type="button" class="btn btn-dark mailL" onClick={
            props.onmail
          }>
            Click
          </button>
        </td>
      </tr>
    </>
  );
};

const Page4 = () => {
  const [filter, setFilter] = useState("");
  const [liste, setliste] = useState([]);
  useEffect(() => {
    const reponsePromise = fetch("http://localhost:3001/liste");
    reponsePromise.then((response) => {
      const jsonpromise = response.json();
      jsonpromise.then((t) => {
        setliste(t);
      });
    });
  }, []);

  return (
    <>
      <nav>
        <h1>Liste recoure etudiant ISIL</h1>
        <div className="input">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Recherche"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setFilter(e.target.value);
                console.log(filter);
              }}
            />
          </div>
        </div>
      </nav>
      <div className="liste">
        <table className="table color table-striped-columns">
          <thead>
            <tr>
              <td>Matricule</td>
              <td>Nom</td>
              <td>Prénom</td>
              <td>Mail</td>
              <td>Groupe</td>
              <td>Module</td>
              <td>Nature</td>
              <td>Note Réeels</td>
              <td>Note Affiché</td>
              <td>Décision</td>
              <td>Envoi Mail</td>
            </tr>
          </thead>
          <tbody>
            {liste.map((e, i) => {
              if (liste.length == 0) return;
              if (
                !e.idEtudient.nom
                  .toLocaleUpperCase()
                  .includes(filter.toLocaleUpperCase()) &&
                !e.matricule.includes(filter) &&
                !e.idEtudient.prenom
                  .toLocaleUpperCase()
                  .includes(filter.toLocaleUpperCase())
              )
                return;

              return (
                <Liste
                  key={e.matricule}
                  matricule={e.matricule}
                  nom={e.idEtudient.nom}
                  prenom={e.idEtudient.prenom}
                  mail={e.idEtudient.email}
                  groupe={e.idEtudient.groupe}
                  module={e.module}
                  nature={e.nature}
                  noter={e.note_reel}
                  notea={e.note_affiche}
                  status={e.status}
                  onmail={async () => {
                    const res = await fetch("http://localhost:3001/mail", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify({
                        _id: e._id,
                      }),
                    });
                  }}
                  onclick={async () => {
                    const t = [...liste];
                    t[i].status = !t[i].status;
                    setliste(t);
                    console.log(e._id);
                    const res = await fetch("http://localhost:3001/status", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify({
                        _id: e._id,
                      }),
                    });
                  }}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Page4;
