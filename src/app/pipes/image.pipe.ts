import { Pipe, PipeTransform } from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: "image"
})
export class ImagePipe implements PipeTransform {
    transform(value: string, ...args: unknown[]): SafeHtml {
        const imageUrl = value;
        const template = `
    <img src="${imageUrl}" alt="${imageUrl.split("/").pop()?.split(".")[0]}" />
    `;
        return this.sanitizer.bypassSecurityTrustHtml(template);
    }

    constructor(private sanitizer: DomSanitizer) {}
}
