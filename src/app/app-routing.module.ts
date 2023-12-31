import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ServiceComponent } from "./service/service.component";
import { BlogComponent } from "./blog/blog.component";
import { CareerComponent } from "./career/career.component";
import { XxxComponent } from "./_/xxx/xxx.component";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "/home",
		pathMatch: "full"
	},
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "profile",
		component: ProfileComponent
	},
	{
		path: "service",
		component: ServiceComponent
	},
	{
		path: "blog",
		component: BlogComponent
	},
	{
		path: "career",
		component: CareerComponent
	},
	{
		path: "xxx",
		component: XxxComponent
	},
	{
		path: "**",
		pathMatch: "full",
		component: NotfoundComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: "enabledBlocking"
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
