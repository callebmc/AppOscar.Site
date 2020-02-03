import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import "reflect-metadata";
import "es6-shim";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { CategoriaService } from "./_services/categoria.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { CategoriaListComponent } from "./categoria/categoria-list/categoria-list.component";
import { CategoriaListResolver } from "./_resolvers/categoria-list.resolver";
import { CategoriaCardComponent } from "./categoria/categoria-card/categoria-card.component";
import { CategoriaCreateComponent } from "./categoria/categoria-create/categoria-create.component";
import { FilmeCardComponent } from "./filme/filme-card/filme-card.component";
import { FilmeListComponent } from "./filme/filme-list/filme-list.component";
import { FilmeCreateComponent } from "./filme/filme-create/filme-create.component";
import { FilmeService } from "./_services/filme.service";
import { FilmeListResolver } from "./_resolvers/filme-list.resolver";
import { ParticipacaoService } from "./_services/participacao.service";
import { IndicadosListComponent } from "./indicados/indicados-list/indicados-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material-module";
import { IndicadosCardComponent } from "./indicados/indicados-card/indicados-card.component";
import { JsonDeserializerFactory } from "./_services/json-deserialize.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        CategoriaListComponent,
        CategoriaCardComponent,
        CategoriaCreateComponent,
        FilmeCardComponent,
        FilmeListComponent,
        FilmeCreateComponent,
        IndicadosListComponent,
        IndicadosCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        DemoMaterialModule
    ],
    providers: [
        CategoriaService,
        CategoriaListResolver,
        FilmeService,
        FilmeListResolver,
        ParticipacaoService,
        JsonDeserializerFactory
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
