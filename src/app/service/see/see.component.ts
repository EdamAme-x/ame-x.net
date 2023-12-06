import { Component } from "@angular/core";

@Component({
	selector: "ServiceSee",
	templateUrl: "./see.component.html",
	styleUrls: ["./see.component.scss"]
})
export class SeeComponent {
	toPage(url: string) {
		window.location.href = url;
	}
}
