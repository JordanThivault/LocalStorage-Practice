import { useState, useEffect } from "react";
import Exercice from "./container/Exercice";

export default function Exercice3() {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      window.location.reload(); // Rafraîchit la page
    }
  }, [refresh]);

  // Fonction pour supprimer les données de l'exercice 1
  const supprimerExercice1 = () => {
    localStorage.removeItem("inputValue");
    setRefresh(true); 
  };

  // Fonction pour supprimer les données de l'exercice 2
  const supprimerExercice2 = () => {
    localStorage.removeItem("count");

    setRefresh(true); 
  };

  // Fonction pour effacer tout le localStorage
  const effacerTout = () => {
    localStorage.clear();
    setRefresh(true); 
  };

  return (
    <Exercice>
      <h2>Exercice 3 : Supprimer une entrée spécifique dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Créez des boutons qui, lorsqu'ils sont cliqués, suppriment une
        entrée spécifique du LocalStorage (utilisez `localStorage.removeItem`).
      </p>
      <div className="solution">
        <button onClick={supprimerExercice1}>
          Supprimer les données de l'Exercice 1
        </button>
        <button onClick={supprimerExercice2}>
          Supprimer les données de l'Exercice 2
        </button>
        <button onClick={effacerTout}>Effacer tout le LocalStorage</button>
      </div>
    </Exercice>
  );
}
