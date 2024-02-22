import { useEffect, useState } from "react";
import './charPageStyle.css'
import { useParams } from "react-router-dom";
import api from "../../services/api";

interface ResponseData {

    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };

}

export const CharacterPage = () => {

    const [character, setCharacter] = useState<ResponseData[]>([])
    const { id } = useParams();

    const verifyDescription = character.map(e => e.description).toString()

    useEffect(() => {

        const fetch = async () => {

            try {
                const res = await api.get(`characters/${id}`)
                setCharacter(res.data.data.results)

            } catch (err) {
                console.log(err)
            }
        }
        fetch();
    }, [id])

    return (
        <>
            <div className="section">

                <div className="photo">
                    <img src={`${character.map(char => char.thumbnail.path)}.${character.map(char => char.thumbnail.extension)}`} alt="character" />
                </div>

                <div className="description">
                    <h1>{character.map(char => char.name)}</h1>
                    
                    {verifyDescription !== '' ? (
                        
                        <div>
                          
                            <h3>{character.map(e => e.description)}</h3>
                        </div>

                    ) : (
                        <h3>{`{description not Found or Include}`}</h3>
                    )}
                </div>
            </div>


        </>
    )
}