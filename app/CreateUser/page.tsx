import { register } from "@/lib/user";

export default function CreateUser() {

    return (<>
    
    <h1 className="text-center font-bold text-5xl">Create a User</h1>
    
    <form className="text-center py-10" action={register} >
        <div className="mx-auto w-fit grid grid-cols-[150px_1fr] gap-x-4 gap-y-3 items-center">
            <label>Email:</label>
                <input className="border rounded" type="email" name="email" />

            <label>Password:</label>
                <input className="border rounded" type="password" name="password" />

            <label>Name:</label>
                <input className="border rounded" type="text" name="Name" />

            <label>First Name:</label>
                <input className="border rounded" type="text" name="First_Name" />

            <label>User Name:</label>
                <input className="border rounded" type="text" name="User_Name" />
        </div>

        <br/>
        <button className="block mx-auto mt-4 w-60 bg-slate-600 text-white rounded hover:bg-slate-300 hover:text-black " type="submit">Create acount</button>
        </form>

    <h4 className="text-center tex">Sign in <a className="text-blue-500 underline" href="/Login">here</a></h4>
    
    </>)
}

