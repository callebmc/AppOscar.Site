import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaListResolver } from './_resolvers/categoria-list.resolver';
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';
import { FilmeListComponent } from './filme/filme-list/filme-list.component';
import { FilmeCreateComponent } from './filme/filme-create/filme-create.component';
import { FilmeListResolver } from './_resolvers/filme-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: 'categorias',
                component: CategoriaListComponent,
                resolve: { categoria: CategoriaListResolver }
            },
            {
                path: 'categoria/criar',
                component: CategoriaCreateComponent
            },
            {
                path: 'filme',
                component: FilmeListComponent,
                resolve: { filme: FilmeListResolver }
            },
            {
                path: 'filme/criar',
                component: FilmeCreateComponent
            }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
