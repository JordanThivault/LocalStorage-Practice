import { useState, useEffect } from "react";
import Exercice from "./container/Exercice";

export default function Exercice4() {
  // 1. Utilisation de useState pour stocker la liste des tâches
  const [task, setTask] = useState(""); // Pour la tâche courante
  const [tasks, setTasks] = useState([]); // Pour la liste des tâches

  // 2. Utilisation de useEffect pour récupérer les tâches à partir du localStorage lors du premier rendu
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // 3. Fonction pour ajouter une nouvelle tâche
  const addTask = () => {
    if (task.trim()) {
      const newTasks = [...tasks, task]; // Ajout de la nouvelle tâche
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks)); 
      setTask(""); // Réinitialisation du champ de texte
    }
  };

  // 4. Fonction pour gérer l'entrée de texte
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <Exercice>
      <h2>Exercice 4 : Liste de tâches avec sauvegarde dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Créer une application de liste de tâches (To-Do List) qui
        sauvegarde et restaure la liste des tâches depuis le LocalStorage.
      </p>
      <div className="solution">
        {/* Champ de saisie pour ajouter une nouvelle tâche */}
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Ajouter une tâche"
        />
        {/* Bouton pour ajouter la tâche */}
        <button onClick={addTask}>Ajouter une tâche</button>

        {/* Affichage des tâches */}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </Exercice>
  );
}
