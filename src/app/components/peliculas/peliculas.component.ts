import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  public peliculas: Array<Pelicula>;
  public fecha:any;

  constructor(
    private _peliculaService:PeliculaService
  ) {
    console.log('Contructor lanzado');
    this.titulo="Componente Peliculas";
    this.peliculas=this._peliculaService.getPeliculas();
    this.fecha=new Date(2020,8,12);
   }  

  ngOnInit(): void {
    console.log('Componente iniciado');
    console.log(this.peliculas)
    console.log(this._peliculaService.holaMundo)
  }

  ngDoCheck(){
    console.log('DoCheck lanzado');
  }

  ngOnDestroy(){
    console.log('El componente se va a eliminar');
  }

  cambiarTitulo(){
    this.titulo="El titulo ha sido cambiado";
  }

  seleccionar(event:any,pelicula:Pelicula){
    console.log(pelicula);
  }

}
