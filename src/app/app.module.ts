import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { IconComponent } from './icon/icon.component';
import { ClientComponent } from './client/client.component';
import { ScriptComponent } from './client/script/script.component';
import { AtomComponent } from './icon/atom/atom.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    IconComponent,
    ClientComponent,
    ScriptComponent,
    AtomComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
