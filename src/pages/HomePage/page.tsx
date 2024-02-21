import React, { useEffect, useState } from "react";
import api from '../../services/api'
import bg from '../../assets/Images/bg.jpg'

import './homePageStyle.css'

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

    const[characters, setCharacters] = useState<ResponseData[]>([])

    useEffect(() =>{

        const fetch = async () => {
            try {
                const res = await api.get(`characters`)
                setCharacters(res.data.data.results)

            } catch (err) {
                console.log(err)
            }
        }
        fetch();
       
    },[])

    return (
        <>
        <header>
            <div className="background">
                <img src={bg} alt="background"/>
            </div>

            <div className="search-bar">
                <input type="search" placeholder="Search here" className="search"/>

            </div>
        </header>
        <body>

        <div className='content'>
                <ul>
                    {characters.map(char=>{

                        return(
                            <li>
                                <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="icon from character"/>
                                <span className='name'>{char.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </body>
        </>
    )
}