import { ReactNode } from "react"

type CvEntry ={
    title: string
    employer: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry){
    return (
    <div className=" p-4 border border-b-black rounded shadow mx-4">
        <div className="flex items-center justify-between">
            <h3 className="font-bold mb-2">{props.title}</h3>
            <h4 className="mb-2 italic text-slate-500">{props.employer}</h4>

        </div>
        
        {props.children}
    </div>

    )
}