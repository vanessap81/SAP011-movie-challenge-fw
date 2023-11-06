export interface MovieGenreId {
    id: number,
    original_title: string,
    release_date: string,
    poster_path: string,
    overview: string,
    genre_id: Genre[],
    vote_average: number,
    vote_count: number
}

interface Genre {
    id: number
}

