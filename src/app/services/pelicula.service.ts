import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{
    public peliculas:Pelicula[];
    constructor(){
        this.peliculas=[
            new Pelicula("Spiderman 4",2019,'https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg'),
            new Pelicula("Los Vengadores EndGame",2018,'https://hipertextual.com/wp-content/uploads/2021/04/Avengers-endgame-vengadores-endgame-scaled.jpeg'),
            new Pelicula("Batman vs Superman", 2015,'https://www.muycomputer.com/wp-content/uploads/2017/02/batman-V-Superman.jpg'),
            new Pelicula("Batman vs Superman",2013, 'https://www.muycomputer.com/wp-content/uploads/2017/02/batman-V-Superman.jpg'),
          ];
    }
    holaMundo(){
        return 'Hola mundo desde un servicio de angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}