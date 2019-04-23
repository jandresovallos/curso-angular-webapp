import { Component } from '@angular/core';

@Component ({
    selector: 'error',
    templateUrl: '../views/error.html'
})
export class ErrorComponent{
    public titulo: String;

    constructor(){
        this.titulo = 'ERROR!!! -- Página no encontrada';
    }
    ngOnInit(){
        console.log('Componente error.component.ts CARGADO!!!');
    }
}