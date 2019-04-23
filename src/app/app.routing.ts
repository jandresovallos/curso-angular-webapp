import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosListComponent},
    {path: '**', component: ErrorComponent} //Esta siempre debe ser la última ruta
];

export const appRoutingProviders: any[] = [];

/*Se llama al metodo RouterModule y al método forRoot quién recibe un array
de rutas */
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);