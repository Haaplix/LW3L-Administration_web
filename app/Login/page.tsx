import { login } from "@/lib/user";


export default function LoginPage() {

    return (<>
    
    <h1 className="text-center font-bold text-5xl">Login Page</h1>
    
    <form className="text-center py-10" action={login} >
        <div className="mx-auto w-fit grid grid-cols-[150px_1fr] gap-y-3 items-center">
            <label>User : </label>
                <input className="border rounded" type="text" name="User" required/>
            <label >Password:</label>
                <input className="border rounded" type="password" name="password" required/>
        </div>    
            <button className="block mx-auto mt-4 w-60 bg-slate-600 text-white rounded hover:bg-slate-300 hover:text-black " type="submit">Login</button>
        
    </form>

    <h4 className="text-center tex">Don't have an account? Sign up <a className="text-blue-500 underline" href="/CreateUser">here</a></h4>
    
    </>)
}

