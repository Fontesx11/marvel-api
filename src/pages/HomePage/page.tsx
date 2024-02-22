import { useCallback, useEffect, useState } from "react";
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
    const [search, setSearch] = useState('')

    const lowerSearch = search.toLowerCase();

    const filteredChar = characters.filter((char) => char.name.toLowerCase().includes(lowerSearch))

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

    const handleMore = useCallback(async()=>{
        try{
            const offset = characters.length;
            const response = await api.get('characters',{
                params: {
                    offset,
                }
            });

            setCharacters([...characters,...response.data.data.results])
        } catch(err){
            console.log(err)
        }
    },[characters])

    return (
        <>
            <header>
                <div className="background">
                    <img src={bg} alt="background" />
                </div>

                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Search here"
                        className="search"
                        value={search}
                        onChange={(ev) => setSearch(ev.target.value)}
                    />

                </div>
            </header>


            <div className='content'>
                <ul>
                    {filteredChar.map(char => {

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

            <button className='button-more' onClick={handleMore}>More</button>
        </>
    )
}