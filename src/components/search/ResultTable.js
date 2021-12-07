import React, {useState, useEffect} from 'react'
import axios from "axios"
import GameCard from './GameCard';

function ResultTable() {

    const [allGames, setAllGames] = useState([]);

    useEffect( ()=> {
        const fetchAllGames = async()=> {
                const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
                headers: {
                  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                  'x-rapidapi-key': '8dd6507080mshe13590972968db9p1d40b7jsn10bdf0273fd8'
                }
            }
            )        
            setAllGames(response.data)
            console.log(response.data)
        }
        fetchAllGames();
    }, [])

    /* använd för att mappa igenom alla games
    {allGames.map((game) => {
            return (<p class="text-gray-400">{game.title}</p>)
        })} */

    return (
        <>
          {/*   <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div class="p-3">
              <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                      <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                          <tr>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-left">Game cover image</div>
                              </th>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-left">Name</div>
                              </th>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-left">Genre</div>
                              </th>
                              
                          </tr>
                      </thead>
                      <tbody class="text-sm divide-y divide-gray-100">
                          <tr>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"/></div>
                                      
                                  </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-gray-800">Red Dead Redemption</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-gray-800">RGPA</div>
                              </td>
                              
                          </tr>
                          </tbody>
                  </table>
                  </div>
          </div>
      </div> */}

{allGames.map((game) => {
            return (<GameCard
              //key={product.id}
              thumbnail={game.thumbnail}
              title={game.title}
              genre={game.genre}/>)
        })}

        </>
        
    )
}

export default ResultTable
