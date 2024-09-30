import { useState, useEffect } from "react";
import Exercice from "./container/Exercice";

export default function Exercice2() {
  // 1. Utilisation du state pour stocker la valeur du compteur
  const [count, setCount] = useState(0);

  // 2. Utilisation de useEffect pour récupérer la valeur du localStorage lors du premier rendu
  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  // 3. Fonction pour gérer l'incrémentation
  const plus = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  // 4. Fonction pour gérer la décrémentation
  const moins = () => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  return (
    <Exercice>
      <h2>Exercice 2 : Compteur persistant avec LocalStorage</h2>
      <p className="instructions">
        Objectif : Créer un compteur simple qui se sauvegarde dans le
        LocalStorage. Le nombre doit persister après un rafraîchissement de la
        page.
      </p>
      <div className="solution">
        <div>
          {/* Bouton pour diminuer le compteur */}
          <button onClick={moins}>-</button>
          
          {/* Bouton pour augmenter le compteur */}
          <button onClick={plus}>+</button>

          {/* Affichage du compteur */}
          <p>Compteur : {count}</p>
        </div>
      </div>
    </Exercice>
  );
}
