
// import type { TaskListProps } from '../../types'
// import TaskItem from './TaskItem'


// {tasks, onDelete, onStatusChange}: TaskListProps

function TaskList() {
 
  // if(tasks.length === 0 ){
  //   return (
  //     <div>
  //     <p>Add a task to the list </p>
  //     </div>
  //     )
  // }

  return (
    <div>
<h6>hello</h6>
      {/* mapping eack task that has been added to the list */}
      {/* {tasks.map((task) => {
        <TaskItem 
        key={task.id}
        task={task}
        onDelete={onDelete}
        onStatusChange={onStatusChange}/>
      })} */}
    </div>
  )
}

export default TaskList