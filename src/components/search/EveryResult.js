import React, {useState, useEffect} from 'react';
import axios from "axios";
import GameCard from './GameCard';

function ResultTable() {

    const [allGames, setAllGames] = useState([]);

    useEffect( ()=> {
        const fetchAllGames = async()=> {
                const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
                headers: {
                  'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
                  'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
                }
            }
        )        
        
        setAllGames(response.data)

    }
        fetchAllGames();
}, [])

    return (
        <>
            {allGames.map((game) => {
                return (<GameCard
                    //key={product.id}
                    thumbnail={game.thumbnail}
                    title={game.title}
                    genre={game.genre}/>)
        }
    )}
        </>
    )
}

export default ResultTable;