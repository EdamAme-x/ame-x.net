import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'LayoutPartsAbility',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent {
  RawCode = `
<script>
  window.onload = () => {
    const cardsContainer = document.querySelector("[cards-raw] .cards");
    const cards = Array.from(document.querySelectorAll("[cards-raw] .card"));
    const overlay = document.querySelector("[cards-raw] .overlay");

    const applyOverlayMask = (e) => {
        const overlayEl = e.currentTarget;
        const x = e.pageX - cardsContainer.offsetLeft;
        const y = e.pageY - cardsContainer.offsetTop;

        overlayEl.style = \`--opacity: 1; --x: \${x}px; --y:\${y}px;\`;
    };

    const createOverlayCta = (overlayCard, ctaEl) => {
        const overlayCta = document.createElement("div");
        overlayCta.classList.add("cta");
        overlayCta.innerHTML = ctaEl.outerHTML;
        overlayCta.setAttribute("aria-hidden", true);
        overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            const cardIndex = cards.indexOf(entry.target);
            let width = entry.borderBoxSize[0].inlineSize;
            let height = entry.borderBoxSize[0].blockSize;

            console.log(\`Card \${cardIndex} - Width: \${width}px, Height: \${height}px\`);

            if (cardIndex >= 0) {
                overlay.children[cardIndex].children[0].style.width = \`\${width}px\`;
                overlay.children[cardIndex].children[0].style.height = \`\${height}px\`;
                overlay.children[cardIndex].children[0].children[0].children[3].style.opacity = \`0\`;
            }
        });
    });

    const initOverlayCard = (cardEl) => {
        const overlayCard = document.createElement("div");
        overlayCard.classList.add("card");
        createOverlayCta(overlayCard, cardEl);
        overlay.append(overlayCard);
        observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);
}
</script>
  `;

  ScriptCode: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.ScriptCode = this.sanitizer.bypassSecurityTrustHtml(this.RawCode);
  }
}
