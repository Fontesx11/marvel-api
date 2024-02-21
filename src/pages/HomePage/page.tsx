import React, { useEffect, useState } from "react";
import api from '../../services/api'
import bg from '../../assets/Images/bg.jpg'

import './homePageStyle.css'
import CharacterCard from "../../components/CharacterCard";

interface ResponseData {

    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };

}

export const HomePage = () => {

    const [characters, setCharacters] = useState<ResponseData[]>([])

    useEffect(() => {

        const fetch = async () => {
            try {
                const res = await api.get(`characters`)
                setCharacters(res.data.data.results)

            } catch (err) {
                console.log(err)
            }
        }
        fetch();

    }, [])

    return (
        <>
            <header>
                <div className="background">
                    <img src={bg} alt="background" />
                </div>

                <div className="search-bar">
                    <input type="search" placeholder="Search here" className="search" />

                </div>
            </header>


            <div className='content'>
                <ul>
                    {characters.map(char => {

                        return (
                            <li key={char.id}>
                                <CharacterCard path={char.thumbnail.path}
                                    extension={char.thumbnail.extension}
                                    name={char.name}

                                />
                            </li>
                        )
                    })}
                </ul>
            </div>


        </>
    )
}