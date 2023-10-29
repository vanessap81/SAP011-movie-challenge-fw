export interface Movie {
    id: number,
    original_title: string,
    release_date: string,
    poster_path: string,
    overview: string,
    genres: Genre[],
    vote_average: number,
    vote_count: number
}

interface Genre {
    name: string
}

