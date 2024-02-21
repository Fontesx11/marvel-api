import React, { useEffect } from "react";
import axios from 'axios'

const publicKey = '19bb979fb2444ff9653b8dcaedb04cf6'

const hash = '1b572234c3e7464d0d38e8b3caf16033'

export const HomePage = () => {

    useEffect(() =>{

        try {

            const fetch = async () =>{
                const res =  await axios.get(`http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=${publicKey}&hash=${hash}`)
                console.log(res.data.data.results)
            }
            fetch();

        } catch(err){

        }
        
       
    },[])

    return (
        <p>Hello World</p>
    )
}