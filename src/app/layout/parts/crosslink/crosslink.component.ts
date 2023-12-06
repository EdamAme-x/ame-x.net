import { Component } from "@angular/core";

@Component({
	selector: "LayoutPartsCrosslink",
	templateUrl: "./crosslink.component.html",
	styleUrls: ["./crosslink.component.scss"]
})
export class CrosslinkComponent {
	crosslinks: {
		name: string;
		description: string;
		link: string;
		color?: string;
	}[] = [
		{
			name: "s0u7a.net",
			description: "The website of @s0u7a",
			link: "https://s0u7a.net",
			color: "green"
		},
		{
			name: "doremire-server.com",
			description: "The website of @doremire0",
			link: "https://doremire-server.com"
		},
		{
			name: "256server.com",
			description: "The website of @256_daisuki",
			link: "https://256server.com"
		}
	];
}
