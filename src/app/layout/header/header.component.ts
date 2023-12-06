import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'LayoutHeader',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	animations: [
		trigger('fadeInOut', [
			state('void', style({ opacity: 0 })),
			// fadein
			transition(':enter, :leave', [animate('0.15s', style({ opacity: 1 }))])
		])
	]
})
export class HeaderComponent {
	isOpen = false;
	menuOpacity = 100;
	showMenu = false;

	changeMenu() {
		this.isOpen = !this.isOpen;
	}

	toggleMenu() {
		this.showMenu = !this.showMenu;
	}

	toPage(url: string) {
		window.location.href = url;
	}

	ngAfterViewInit() {
		if (typeof window === 'undefined') {
			return;
		}

		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				this.menuOpacity = 0;
			} else {
				this.menuOpacity = 100;
			}
		});
	}
}
