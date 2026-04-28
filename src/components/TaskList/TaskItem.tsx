import type { TaskItemProps, TaskStatus, } from "../../types"

function TaskItem({task, onDelete,onStatusChange}:TaskItemProps) {

  const statusOptions: TaskStatus[] = ['pending', 'in progress', 'on hold', 'completed']


  return (
    <div>

    <h4>{task.status}</h4>
    <p>{task.description}</p>
    <p>{task.priority}</p>

     <p className="text-sm text-slate-500 dark:text-slate-400">
          Due <span className="font-medium text-slate-700 dark:text-slate-200">{task.dueDate}</span>
     </p>


    <select value={task.status} onChange={(e)=> onStatusChange(task.id, e.target.value as TaskStatus)} >
      
      {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}


    </select>
    
     <button
            type="button"
            onClick={() => onDelete(task.id)}>
     </button>

    </div>
  )
}

export default TaskItem