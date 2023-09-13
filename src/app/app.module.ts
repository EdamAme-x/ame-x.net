import { NgModule } from '@angular/core';
// @ts-ignore
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
import { AbilityComponent } from './layout/parts/ability/ability.component';
import { RocketComponent } from './layout/parts/rocket/rocket.component';
import { LinksComponent } from './layout/parts/links/links.component';
import { TechsComponent } from './layout/parts/techs/techs.component';

// Module
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    IconComponent,
    ClientComponent,
    ScriptComponent,
    AtomComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AbilityComponent,
    RocketComponent,
    LinksComponent,
    TechsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class AppModule { }
