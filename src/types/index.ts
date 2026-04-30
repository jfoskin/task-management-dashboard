export type TaskStatus = 'pending' | 'in progress' | 'on hold' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    // status: TaskStatus;
    priority: TaskPriority;
}


export interface TaskItemProps {
    task: Task;
    // onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

export interface TaskListProps {
    tasks: Task[];
    // onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
    onFilterChange: (filters: {
        status?: TaskStatus;
        priority?: TaskPriority;
    }) => void;
}

export interface TaskFormProps {
    onAddTask: (task: Task) => void;

}

export interface FormData {
    title: string
    description: string
    dueDate: string
    priority: TaskPriority
    status: TaskStatus
}