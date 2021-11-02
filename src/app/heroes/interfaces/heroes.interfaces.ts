export interface Heroe {
    id?: string; //El signo de interrogacion significa opcional
    superhero: string;
    publisher: Publisher;
    alter_ego: string;
    first_appearance: string;
    characters: string;
    alt_img?: string; //puede contener un string con el siguiente contenido https://direccion.com/img.png o img.jpg algo asi
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}