import { useDetailAnime } from "../../hooks/useDetailAnime";

export const AnimeCard = (anime) => {

    const { handleNameAndDate } = useDetailAnime();

    return (
        <div
        onClick={()=>handleNameAndDate(anime.title,anime.start_date,anime.mal_id)}
        className="card">
            <div>
                <div className="img1"
                style={{backgroundImage: `url(${anime.image_url})`}}
                ></div>
                <div className="title">{anime.title}</div>
            </div>
        </div>
    )
}
