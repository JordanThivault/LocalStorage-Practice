import { useState, useEffect } from "react";
import Exercice from "./container/Exercice";

export default function Exercice1() {
  // 1. Utilisation de useState pour stocker la valeur de l'input
  const [value, setValue] = useState("");

  // 2. Récupération de la valeur du localStorage lors du premier rendu avec useEffect
  useEffect(() => {
    const storedValue = localStorage.getItem("inputValue");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  // 3. Fonction pour gérer les changements dans l'input et stocker la valeur dans localStorage
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem("inputValue", newValue);
  };

  return (
    <Exercice>
      <h2>Exercice 1 : Stocker le texte dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Chaque fois que l'utilisateur tape dans le champ de texte, la
        valeur doit être sauvegardée dans le LocalStorage. Lorsque l'utilisateur
        recharge la page, la valeur doit être restaurée à partir du
        LocalStorage.
      </p>
      <div className="solution">
        <div>
          <input
            type="text"
            value={value} // 4. La valeur de l'input est liée à l'état
            onChange={handleInputChange} // 5. Appel de la fonction à chaque changement
          />
        </div>
      </div>
    </Exercice>
  );
}
