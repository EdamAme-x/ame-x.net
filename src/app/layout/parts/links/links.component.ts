import { Component } from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: "LayoutPartsLinks",
    templateUrl: "./links.component.html",
    styleUrls: ["./links.component.scss"]
})
export class LinksComponent {
    seed: boolean = Math.random() > 0.25;

    size: number = 40;

    links: { title: string; url: string; icon: string; raw?: SafeHtml }[] = [
        {
            title: "Github",
            url: "https://github.com/edamame-x",
            icon: `<img src="https://icongr.am/devicon/github-original.svg?size=${this.size}&color=currentColor" class="filter invert" width="${this.size}" height="${this.size}" alt="github" />`
        },
        {
            title: this.seed ? "Twitter" : "X",
            url: "https://twitter.com/amex2189",
            icon: this.seed
                ? `<img src="https://icongr.am/entypo/twitter.svg?size=${this.size}&color=currentColor" class="filter invert" width="${this.size}" height="${this.size}" alt="twitter" />`
                : `<svg viewBox="0 0 24 24" class="filter invert" width="${this.size}" height="${this.size}" aria-hidden="true" ><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>`
        }
    ];

    constructor(private sanitizer: DomSanitizer) {
        this.links = this.links.map(link => ({
            ...link,
            raw: this.sanitizer.bypassSecurityTrustHtml(link.icon)
        }));
    }
}
