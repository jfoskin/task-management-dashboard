import type { TaskItemProps,  } from "../../types"

function TaskItem({task, onDelete,}:TaskItemProps) {

  // const statusOptions: TaskStatus[] = ['pending', 'in progress', 'on hold', 'completed']


  const priorityColors: Record<string, string> = {
    low: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    high: 'bg-red-100 text-red-700',
  }

  return (
    <div className="flex w-1/3 items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex flex-col gap-1">
        <p className="font-medium text-slate-800 dark:text-slate-100">{task.title}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{task.description}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold capitalize ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Due <span className="font-medium text-slate-600 dark:text-slate-300">{task.dueDate}</span>
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="rounded bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600 active:bg-red-700"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem