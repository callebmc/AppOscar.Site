import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CategoriaListComponent } from "./categoria/categoria-list/categoria-list.component";
import { CategoriaListResolver } from "./_resolvers/categoria-list.resolver";
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "",
        runGuardsAndResolvers: "always",
        children: [
            {
                path: "categorias",
                component: CategoriaListComponent,
                resolve: { categoria: CategoriaListResolver }
            },
            {
                path: "categoria/criar",
                component: CategoriaCreateComponent
            }
        ]
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
