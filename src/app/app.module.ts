import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { ButtonResetComponent } from './components/button-reset/button-reset.component';
import { LogoSvgComponent } from './components/logo-svg/logo-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    HeaderComponent,
    ResumenComponent,
    ButtonResetComponent,
    LogoSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
