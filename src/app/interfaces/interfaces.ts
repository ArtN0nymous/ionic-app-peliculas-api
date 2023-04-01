export interface Respuesta {
    page:          number;
    results:       Pelicula[];
    total_pages:   number;
    total_results: number;
}

export interface Pelicula {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: Lenguaje;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum Lenguaje {
    En = "en",
    Es = "es",
    Ko = "ko",
}

export interface Detalles {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: BelongsToCollection;
    budget:                number;
    genres:                Genero[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  CompaniaProduccion[];
    production_countries:  PaisProduccion[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      LenguajeHablado[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface BelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

export interface Genero {
    id:   number;
    name: string;
}

export interface CompaniaProduccion {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

export interface PaisProduccion {
    iso_3166_1: string;
    name:       string;
}

export interface LenguajeHablado {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}

export interface Creditos {
    id:   number;
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}

