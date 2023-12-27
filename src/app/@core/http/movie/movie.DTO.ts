export interface Movies {
    Response?: string;
    Search?: Search[];
    totalResults?: string;
}

export interface Search {
    Poster?: string;
    Title?: string;
    Type?: string;
    Year?: string;
    imdbID?: string;
}

