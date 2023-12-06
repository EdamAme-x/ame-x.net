import { Component, Input } from "@angular/core";

@Component({
	selector: "IconAtom",
	templateUrl: "./atom.component.html",
	styleUrls: ["./atom.component.scss"]
})
export class AtomComponent {
	@Input() point: string | undefined;
	@Input() style: string | undefined;
}
