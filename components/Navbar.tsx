"use client"

import Link from "next/link"
import { ReactNode, useState } from "react"

type NavlinkProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavlinkProps){
    return(
        <li className="hover:bg-slate-600 hover:text-white transition-colors px-4 py-2 rounded-md">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <nav className="bg-transparent text-indigo-950 py-2">
            <ul className="container flex gap-4 justify-center relative">

                <NavLink href="/">Home</NavLink>
                {/* 🔽 DROPDOWN MENU */}
                <li className="relative">
                <div 
                    className="relative px-4 py-2 rounded-md cursor-pointer hover:bg-slate-600  transition-colors"
                    onMouseEnter={() => setOpenDropdown(true)}
                    
                >   
                    <span className="hover:text-white">Port-Folio ▼</span>
                </div>
                    {/* Dropdown Items */}
                    {openDropdown && (
                        <ul className="absolute bg-white shadow-lg rounded-md  left-0 w-40 animate-fade">
                            <li className="px-4 py-2 hover:bg-gray-200">
                                <Link href="/Portugal">Portugal</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200">
                                <Link href="/portfolio">Krakow</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200">
                                <Link href="/Portfolio">Belgïe</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <NavLink href="/MyGear">My Gear</NavLink>
                <NavLink href="/cv">Contact</NavLink>
                <NavLink href="/task">Task</NavLink>

            </ul>
        </nav>
    )
}
