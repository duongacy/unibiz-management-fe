'use client'
import Markdown from 'markdown-to-jsx'
import { memo, useCallback, useReducer } from 'react'

type CounterState = {
  count: number
}

type CounterAction = {
  type: 'increment' | 'decrement'
}

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

type Task = {
  id: number
  name: string
  description: string
}

type TaskState = {
  tasks: Task[]
}

type TaskAction =
  | {
      type: 'add'
      payload: Task
    }
  | {
      type: 'remove'
      payload: number
    }

const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'add':
      return {
        tasks: [...state.tasks, action.payload],
      }
    case 'remove':
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    default:
      return state
  }
}

export default function Page() {
  const [counterState, counterDispatch] = useReducer<
    (state: CounterState, action: CounterAction) => CounterState
  >(counterReducer, {
    count: 0,
  })

  const [tasksState, tasksDispatch] = useReducer<
    (state: TaskState, action: TaskAction) => TaskState
  >(tasksReducer, {
    tasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'Description 1',
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Description 2',
      },
    ],
  })

  const addNewTask = useCallback(
    () =>
      tasksDispatch({
        type: 'add',
        payload: {
          id: new Date().getTime(),
          name: 'New task ' + new Date().getTime(),
          description: 'Description of new task ' + new Date().getTime(),
        },
      }),
    [],
  )

  const removeTask = useCallback(
    (id: number) => tasksDispatch({ type: 'remove', payload: id }),
    [],
  )

  return (
    <div>
      <div className="m-2 border p-2">
        <Markdown># Hello world!</Markdown>
        <h1>Counter: {counterState.count}</h1>
        <button onClick={() => counterDispatch({ type: 'increment' })}>
          Increment
        </button>
      </div>
      <div className="m-2 border p-2">
        <h1>Tasks</h1>
        <button onClick={addNewTask}>Add task</button>
        {tasksState.tasks.map((task) => (
          <TaskItemMemo
            task={task}
            onRemove={removeTask}
            key={task.id}
          ></TaskItemMemo>
        ))}
      </div>
    </div>
  )
}

const TaskItemMemo = memo(
  (props: {
    task: {
      id: number
      name: string
      description: string
    }
    onRemove: (id: number) => void
  }) => {
    console.log('TaskItemMemo render')
    return (
      <div className="m-2 border p-2">
        <h2>{props.task.name}</h2>
        <p>{props.task.description}</p>
        <button onClick={() => props.onRemove(props.task.id)}>Remove</button>
      </div>
    )
  },
)
