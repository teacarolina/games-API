import React from 'react';

const GameCard = React.lazy(() => import('./GameCard'));

function GameList({ games }) {
    return (
        <>
          {
              games === null ? (
                  <div>Games loading...</div>
              ) : (
                  games.map((game) => {
                      return (
                          <GameCard
                            thumbnail={game.thumbnail}
                            title={game.title}
                            genre={game.genre}/>
                      )
                  })
              )
          }  
        </>
    )
}

export default GameList
