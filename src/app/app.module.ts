import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
import { ProfileComponent } from './profile/profile.component';
import { CrosslinkComponent } from './layout/parts/crosslink/crosslink.component';
import { ServiceComponent } from './service/service.component';
import { RepoComponent } from './service/repo/repo.component';
import { SeeComponent } from './service/see/see.component';
import { BlogComponent } from './blog/blog.component';
import { XxxComponent } from './_/xxx/xxx.component';
import { CareerComponent } from './career/career.component';
import { MenuComponent } from './layout/header/menu/menu.component';

// Module
import { MatIconModule } from '@angular/material/icon';
import { SkillService } from './info/skill.service';
import { CareerService } from './info/career.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Others
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
	declarations: [
		AppComponent,
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
		TechsComponent,
		ProfileComponent,
		CrosslinkComponent,
		ServiceComponent,
		RepoComponent,
		SeeComponent,
		BlogComponent,
		MenuComponent,
		CareerComponent,
		XxxComponent,
		ImagePipe
	],
	imports: [BrowserModule, AppRoutingModule, MatIconModule, BrowserAnimationsModule],
	providers: [SkillService, CareerService],
	bootstrap: [AppComponent]
})
export class AppModule {}
