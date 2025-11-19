import { ReactNode } from "react"


type ImageContProps = {
    source: string
    children: ReactNode

}

export default function ImageCont(props: ImageContProps){
    return (
        <img className="object-contain md:object-cover" src={props.source} />
    )

}