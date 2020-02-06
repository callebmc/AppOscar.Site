import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaListResolver } from './_resolvers/categoria-list.resolver';
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';
import { FilmeListComponent } from './filme/filme-list/filme-list.component';
import { FilmeCreateComponent } from './filme/filme-create/filme-create.component';
import { FilmeListResolver } from './_resolvers/filme-list.resolver';
import { IndicadosListComponent } from './indicados/indicados-list/indicados-list.component';
import { CategoriaCadastroFilmeComponent } from './categoria/categoria-cadastro-filme/categoria-cadastro-filme.component';
import { MsalGuard } from '@azure/msal-angular';
import { VotoListComponent } from './voto/voto-list/voto-list.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        // canActivate: [MsalGuard],
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
                path: 'cadastrar',
                component: CategoriaCadastroFilmeComponent,
            },
            {
                path: 'filme',
                component: FilmeListComponent,
                resolve: { filme: FilmeListResolver }
            },
            {
                path: 'filme/criar',
                component: FilmeCreateComponent
            },
            {
                path: 'indicados',
                component: IndicadosListComponent,
                resolve: { categoria: CategoriaListResolver }
            },
            {
                path: 'votos',
                component: VotoListComponent,
                resolve: { categoria: CategoriaListResolver }
            }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
