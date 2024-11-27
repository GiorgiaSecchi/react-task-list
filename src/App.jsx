import { useState } from "react";
import "./App.css";

function App() {
  //# array originale
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];
  // console.log(tasks);

  //* array filtrato (lista 1)
  const CurrentTaskList = tasks.filter((task) => {
    return task.state === "backlog" || task.state === "in_progress";
  });
  // console.log(CurrentTaskList);

  //* array filtrato (lista 2)
  const CompletedTaskList = tasks.filter((task) => {
    return task.state === "completed";
  });
  // console.log(CompletedTaskList);

  return (
    <>
      <div className="header">
        <h1>TASK MANAGER</h1>
      </div>

      <div>
        <h2>Current Task (4)</h2>
        <ul>
          {CurrentTaskList.map((task) => (
            <li key={task.id}>
              <div className="list">
                <span className="title"> {task.title} </span>
                <button className={`btn-tag ${task.state}`}>
                  {task.state}
                </button>{" "}
                <br />
                Priority: {task.priority} <br />
                Estimated Time: {task.estimatedTime}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <h2>Completed Task (6)</h2>
        <ul>
          {CompletedTaskList.map((task) => (
            <li key={task.id}>
              <div className="list">
                <span className="title"> {task.title} </span>
                <button className={`btn-tag ${task.state}`}>
                  {task.state}
                </button>
                <br />
                Priority: {task.priority} <br />
                Estimated Time: {task.estimatedTime}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
