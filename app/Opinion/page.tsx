import { addOpinion, editOpinion, getOpinion, removeOpinion } from "@/lib/tasks"

export default async function TodoApp() {
  const opinion = await getOpinion()
  return (
    <>
    	<form
            action={addOpinion}
            className="md:ml-30 md:pt-10 flex flex-col md:flex-row gap-4 items-start text-indigo-950"
            > 
			<div className="flex flex-col">
				<label className="mb-1">Title</label>
					<input
					name="Title"
					className="border rounded-xs h-7 xl:w-150 md:w-50"
					/>
			</div>

			<div className="flex flex-col">
				<label className="mb-1">Opinion</label>
					<textarea
					name="opinion"
					className="border h-9 md:w-200 rounded-xs"
					/>
			</div>

			<button className="border-2 p-1 md:w-20 w-s self-end hover:bg-slate-600 hover:text-white active:bg-slate-400 transition-colors">
				Submit
			</button>
		</form>

      <div>
        {opinion.map((opinion) => (
			<div key={opinion.id} className="flex justify-center gap-1">
				<form className="md:w-4xl w-100 min-h-20 border-2 rounded text-indigo-950 m-4 grid grid-cols-8">
					<div className="col-span-7">
						<input name="title" className="underline m-1 text-xl col-start-1 w-190	" defaultValue={opinion.title}/>

						<textarea name="opinion" className="m-1 md:w-190 w-95 resize-none h-fit col-start-1" 
								  defaultValue={opinion.opinion}/>
						
						<input type="hidden" name="id" value={opinion.id}/>
					</div>

					<div className="pt-3 col-span-1">
						<button className="m-1 border-2 p-1 w-20 col-end-2  hover:bg-slate-600 hover:text-white active:bg-slate-400  transition-colors" formAction={removeOpinion}>
							Delete
						</button>

						<button className="m-1 border-2 p-1 w-20 col-end-2 hover:bg-slate-600 hover:text-white active:bg-slate-400 transition-colors" formAction={editOpinion}>
							Edit
						</button>
					</div>
				</form>
			</div>
        ))}
      </div>
    </>
  )
}