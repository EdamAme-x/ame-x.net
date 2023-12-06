import { Component, Input } from "@angular/core";

@Component({
	selector: "ServiceRepo",
	templateUrl: "./repo.component.html",
	styleUrls: ["./repo.component.scss"]
})
export class RepoComponent {
	@Input() repo: any = {};

	toPage(url: string) {
		window.open(url, "_blank");
	}
}
