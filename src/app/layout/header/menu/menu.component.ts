import { Component } from "@angular/core";

type Nav = {
	name: string;
	path: `/${string}`;
	icon: `https://${string}`;
	class?: string;
};

@Component({
	selector: "LayoutHeaderMenu",
	templateUrl: "./menu.component.html",
	styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
	navs: Nav[] = [
		{
			name: "Career",
			path: "/career",
			icon: "https://www.svgrepo.com/show/489411/certificate-badge.svg",
			class: "filter invert"
		}
	];
}
