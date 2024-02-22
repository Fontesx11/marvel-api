import React from "react"
import './characterCardStyle.css'
import { useNavigate } from "react-router-dom";

interface cardProps{
    id: string
    name: string,
    path: string,
    extension: string;
}

const CharacterCard:React.FC<cardProps> = ({name,path,extension, id}) => {

    let navigate = useNavigate();

    return(
        
        <div className="card" onClick={()=>navigate(`/${id}`)}>
            <img src={`${path}.${extension}`} alt="character"/>
            <div className="name">{name}</div>
        </div>
    )
}

export default CharacterCard;