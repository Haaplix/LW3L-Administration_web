import { login } from "@/lib/user";


export default function LoginPage() {

    return (<>
    
    <h1 className="text-center font-bold text-5xl">Login Page</h1>
    
    <form className="text-center py-10" action={login} >
        <label className="my-1 block">
            Email: <input className="border rounded" type="email" name="email" />
        </label>
        <br/>
        <label >
            Password: <input className="border rounded" type="password" name="password" />
        </label>
            <button className="block mx-auto mt-4 w-60 bg-slate-600 text-white rounded hover:bg-slate-300 hover:text-black " type="submit">Login</button>
        </form>

    <h4 className="text-center tex">Don't have an account? Sign up <a className="text-blue-500 underline" href="/CreateUser">here</a></h4>
    
    </>)
}

