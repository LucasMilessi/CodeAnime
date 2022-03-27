import axios from '../config';

export const animeStreamingServices = () =>{

    const getTop =(tier)=>{
        return axios({
            method: 'GET',
            url: `/top/anime/1/${tier}`,
        })
    }

    const getGenre =(type)=>{
        return axios({
            method: 'GET',
            url: `search/anime?genre=${type}`,
        })
    }

    const getCharactersStaff  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/characters_staff`,
        })
    }

    const getPictures  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/pictures`,
        })
    }

    const getVideos  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/videos`,
        })
    }

    const getEpisodes  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/episodes`,
        })
    }

    const getNews =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/news`,
        })
    }

    const getMoreInfo =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/moreinfo`,
        })
    }

    const getSearchAnimeByName =(animeName)=>{
        return axios({
            method: 'GET',
            url: `search/anime?q=${animeName}&limit=5`,
        })
    }

    return{
        getTop,
        getGenre,
        getCharactersStaff,
        getPictures,
        getVideos,
        getEpisodes,
        getNews,
        getMoreInfo,
        getSearchAnimeByName,
    }
}