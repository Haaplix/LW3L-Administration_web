import { addArticles, getArticles } from "@/lib/tasks"

export default async function TodoApp() {
  const tasks = await getArticles()
  return (
    <>
      <form action={addArticles}>
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