import { addArticles, getArticles } from "@/lib/tasks"

export default async function TodoApp() {
  const tasks = await getArticles()
  return (
    <>
      <form action={addArticles}>
        <label>
          Opinion: <input name="Opinion" />
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