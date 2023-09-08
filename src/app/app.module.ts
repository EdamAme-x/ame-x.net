import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { IconComponent } from './icon/icon.component';
import { ClientComponent } from './client/client.component';
import { ScriptComponent } from './client/script/script.component';
import { AtomComponent } from './icon/atom/atom.component';

@NgModule({
  declarations: [
    HomeComponent,
    IconComponent,
    ClientComponent,
    ScriptComponent,
    AtomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
