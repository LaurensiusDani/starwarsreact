
interface IResults {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: String;
    eye_color: string;
    birth_year: string;
    gender: 'male' | 'female';
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    url: string;
}

export interface IBodyResponse {
    count: number;
    next: null | string;
    previous: null | string;
    results: IResults[];
}