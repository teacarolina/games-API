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
            return (<div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div class="overflow-x-hidden rounded-2xl relative">
              <img class="h-40 rounded-2xl w-full object-cover" src={game.thumbnail}/>
              <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </p>
            </div>
            <div class="mt-4 pl-2 mb-2 flex justify-between ">
              <div>
                <p class="text-lg font-semibold text-gray-900 mb-0">{game.title}</p>
                <p class="text-md text-gray-800 mt-0">{game.genre}</p>
              </div>
              <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>)
        })}

        </>
        
    )
}

export default ResultTable
