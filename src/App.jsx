import TaskCreator from "./components/TaskCreator";
import { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import Container from "./components/Container";

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    if (!tasksItems.find((task) => (task.name === taskName))) {
      setTaskItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  //Se encarga de obtener los datos del localStorage y los utiliza como estado inicial de taskItems cuando la página se carga 
  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  //Se encarga de guardar el estado actual de tasksItems en el almacenamiento local cada vez que cambia
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasksItems))
  }, [tasksItems])


  const cleanTask = () => {
    setTaskItems(tasksItems.filter((task) => !task.done))
    setShowCompleted(false)
  }


  const toggleTask = (task) => {

    setTaskItems(tasksItems.map((t) => t.name == task.name ? { ...t, done: !t.done } : t))

  }


  return (
    <main className="bg-dark vh-100 text-white">

      <Container>

        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        />

        {
          showCompleted === true ? (
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          ) : null
        }

      </Container>

    </main>
  );
}

export default App;
