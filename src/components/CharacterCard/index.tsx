import React from "react"
import './characterCardStyle.css'


interface cardProps{

    name: string,
    path: string,
    extension: string;
   
}

const CharacterCard:React.FC<cardProps> = ({name,path,extension}) => {


    return(
        <>
        <div className="card">
            <img src={`${path}.${extension}`} alt=""/>
            <div className="name">{name}</div>
        </div>
        </>
    )
}

export default CharacterCard;