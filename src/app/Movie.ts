export interface Movie {
    id: number,
    original_title: string,
    release_date: string,
    poster_path: string,
    overview: string,
    genres: GenreMovie[],
    vote_average: number,
    vote_count: number
}

interface GenreMovie {
    id: number,
    name: string
}

