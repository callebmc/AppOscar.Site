import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import "reflect-metadata";
import "es6-shim";
import { JwtModule } from '@auth0/angular-jwt';

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
import { CategoriaCadastroFilmeComponent } from './categoria/categoria-cadastro-filme/categoria-cadastro-filme.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MsalModule } from '@azure/msal-angular';
import { CountdownModule, CountdownGlobalConfig } from 'ngx-countdown';
import { VotoListComponent } from './voto/voto-list/voto-list.component';
import { VotoCardChoiceComponent } from './voto/voto-card-choice/voto-card-choice.component';
import { AuthServiceService } from './_services/auth-service.service';
import { TooltipModule, ModalModule, BsDatepickerModule, BsLocaleService, CarouselModule, CarouselConfig  } from 'ngx-bootstrap';
import { AuxService } from './_services/timeaux.service';

// function countdownConfigFactory(): CountdownGlobalConfig {
//     return { format: `mm:ss` };
//   }

export function tokenGetter() {
    return localStorage.getItem('token');
 }

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        CategoriaListComponent,
        CategoriaCardComponent,
        CategoriaCreateComponent,
        CategoriaCadastroFilmeComponent,
        FilmeCardComponent,
        FilmeListComponent,
        FilmeCreateComponent,
        IndicadosListComponent,
        IndicadosCardComponent,
        VotoListComponent,
        VotoCardChoiceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        DemoMaterialModule,
        RxReactiveFormsModule,
        MsalModule.forRoot({
            clientID: '9fd84bfd-0275-499b-a63e-a771f4727173',
            authority: 'https://callebauth.b2clogin.com/tfp/callebauth.onmicrosoft.com/B2C_1_signupsigninoscar',
            validateAuthority: false,
            postLogoutRedirectUri: 'https://oscardosamigos.azurewebsites.net/',
            // postLogoutRedirectUri: 'http://localhost:4200/',
            cacheLocation : 'localStorage'
        }),
        CountdownModule,
        JwtModule.forRoot({
            config: {
               tokenGetter,
               whitelistedDomains: ['localhost:5000, oscardosamigosapi.azurewebsites.net/api'],
               blacklistedRoutes: ['localhost:5000/api/auth']
            }
         }),
         ModalModule.forRoot(),
         CarouselModule.forRoot()
    ],
    providers: [
        CategoriaService,
        CategoriaListResolver,
        FilmeService,
        FilmeListResolver,
        ParticipacaoService,
        JsonDeserializerFactory,
        AuthServiceService,
        AuxService,
        { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true }}
        // { provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
