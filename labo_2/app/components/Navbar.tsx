import Link from "next/link"
import { ReactNode } from "react"

type NavlinkProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavlinkProps){
    return(
        <li className="hover:bg-slate-600 py-2 px-2">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar(){
    return(
        <nav className="bg-amber-300 border-2 border-red-900 text-indigo-950 shadow-xl py-2">
            <ul className="border-2 border-green-700 container flex gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">Port-Folio</NavLink>
                <NavLink href="/MyGear">My Gear</NavLink>
                <NavLink href="/cv">Contact</NavLink>
                <NavLink href="/">Blog</NavLink>
            </ul>
        </nav>
        
    )
        
    
}