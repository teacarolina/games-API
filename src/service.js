import axios from "axios";

const fetchGames = async (category, handleSuccess, handleError) => {
    try {
        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
                params: { category },
                headers: {
                    'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
                    'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
                }
            }
        )

        handleSuccess(response.data);
    } catch (error) {
        handleError && handleError(true);
    }
}

export {
    fetchGames,
}