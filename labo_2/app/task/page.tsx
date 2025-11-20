import { createTask, getTasks } from "@/lib/tasks"

export default async function TodoApp() {
  const tasks = await getTasks()
  return (
    <>
      <form action={createTask}>
        <label>
          New task: <input name="title" />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {tasks.map((task, id) => (
          <li>{task.title}</li>
        ))}
      </ul>
    </>
  )
}