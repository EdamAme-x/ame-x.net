import { Component } from "@angular/core";
import { routes } from "../app-routing.module";
import Fuse from "fuse.js";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-notfound",
    templateUrl: "./notfound.component.html",
    styleUrls: ["./notfound.component.scss"]
})
export class NotfoundComponent {
    missingPath: string = "";
    maybePath: string = "/home";

    constructor(private titleService: Title) {}

    ngOnInit() {
        this.titleService.setTitle("Ame_x NOT_FOUND");

        if (typeof window === "undefined") {
            return;
        }
        this.missingPath = window.location.pathname.slice(1);

        const options = {
            threshold: 0.5,
            keys: ["path"]
        };

        const fuse: Fuse<any> = new Fuse(routes, options);

        this.maybePath = "/" + fuse.search(this.missingPath).map(x => x.item)[0].path;
    }
}
