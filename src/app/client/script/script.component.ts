import { Component, Renderer2, ElementRef, AfterViewInit } from "@angular/core";

@Component({
	selector: "ClientScript",
	templateUrl: "./script.component.html"
})
export class ScriptComponent implements AfterViewInit {
	uuid: string = (Date.now() + Math.random() * 100000000000000000).toString(36);

	constructor(
		private renderer: Renderer2,
		private el: ElementRef
	) {}

	ngAfterViewInit() {
		if (typeof window === "undefined") {
			return;
		}

		const script = this.renderer.createElement("script");
		this.renderer.setProperty(script, "type", "text/javascript");
		this.renderer.appendChild(
			script,
			this.renderer.createText(
				`${document
					.getElementById("_script_" + this.uuid)
					?.innerHTML.replace(/\@\[/g, "{")
					.replace(/\]\@/g, "}")}`
			)
		);

		const scriptContainer = this.el.nativeElement.querySelector(`#_script_${this.uuid}`);
		if (scriptContainer) {
			this.renderer.appendChild(scriptContainer, script);
		}
	}
}
