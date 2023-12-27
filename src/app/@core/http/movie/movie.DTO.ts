export interface Movies {
    Response?: string;
    Search?: Search[];
    totalResults?: string;
}

interface Search {
    Poster?: string;
    Title?: string;
    Type?: string;
    Year?: string;
    imdbID?: string;
}

