import { ReactNode } from "react"

type ParaProps = {
    title: string
    Content: string

}

export default function Para(props: ParaProps){
    return (
        <div className="px-4 py-2">
            <h2 className="font-bold text-2xl pb-2">{props.title}</h2>
            <p className="text-justify px-2">{props.Content}</p> 
        </div>
    )
}