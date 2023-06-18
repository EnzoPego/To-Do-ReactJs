import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  const taskTableRow = (doneValue) => {

    return (
      tasks
      .filter((task)=> task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toogleTask={toggleTask} />
      ))
    )
   
  };


  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr>
          <th className="table-primary">Task</th>
        </tr>
      </thead>
      <tbody>{taskTableRow (showCompleted) }</tbody>
    </table>
  );
};

export default TaskTable;
