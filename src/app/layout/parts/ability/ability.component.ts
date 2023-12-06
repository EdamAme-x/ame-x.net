import { Component, OnInit } from "@angular/core";

@Component({
	selector: "LayoutPartsAbility",
	templateUrl: "./ability.component.html",
	styleUrls: ["./ability.component.scss"]
})
export class AbilityComponent implements OnInit {
	toPage(page: string) {
		window.location.href = page;
	}

	Math: any = Math;

	ngOnInit() {
		if (typeof window === "undefined") {
			return;
		}

		//@ts-except-error
		function _0x2c9e() {
			let $ = [
				"--opacity: 1; --x: ",
				"px; --y:",
				"7342730dWXUeQ",
				"height",
				"[cards-raw] .overlay",
				"card",
				"target",
				"11xGdDnL",
				"width",
				"observe",
				"35DDmTCm",
				"createElement",
				"outerHTML",
				"borderBoxSize",
				"cta",
				"1GMYVaV",
				"8006684eswrKb",
				"div",
				"13557051nHfeNm",
				"4KjJRTu",
				"62736RkDXRg",
				"inlineSize",
				"onload",
				"forEach",
				"[cards-raw] .cards",
				"offsetTop",
				"35873880SVdyed",
				"currentTarget",
				"pageY",
				"[cards-raw] .card",
				"innerHTML",
				"style",
				".main__cards",
				"2570882FzJogG",
				"px;",
				"add",
				"children",
				"querySelector",
				"append",
				"8xTmGki",
				"5144775tyrxJa",
				"opacity",
				"blockSize"
			];
			return (_0x2c9e = function () {
				return $;
			})();
		}
		const _0x2b2586 = _0x5937;
		function lite() {
			let $ = _0x5937,
				x = document[$(456)]($(443)),
				e = Array.from(document.querySelectorAll($(448))),
				_ = document.querySelector($(423)),
				c = e => {
					let _ = $;
					if (!document[_(456)](_(451))) return 0;
					let c = e[_(446)],
						t = e.pageX - x.offsetLeft,
						a = e[_(447)] - x[_(444)];
					c[_(450)] = _(419) + t + _(420) + a + _(453);
				},
				t = (x, e) => {
					let _ = $,
						c = document[_(430)](_(436));
					c.classList[_(454)](_(433)), (c[_(449)] = e[_(431)]), x[_(457)](c);
				},
				a = new ResizeObserver(x => {
					let c = $;
					x[c(442)]($ => {
						let x = c,
							t = e.indexOf($[x(425)]),
							a = $[x(432)][0][x(440)],
							r = $.borderBoxSize[0][x(461)];
						t >= 0 &&
							((_[x(455)][t][x(455)][0][x(450)][x(427)] = a + "px"),
							(_[x(455)][t][x(455)][0][x(450)][x(422)] = r + "px"),
							(_.children[t][x(455)][0][x(455)][0][x(455)][3].style[x(460)] = "0"));
					});
				}),
				r = x => {
					let e = $,
						c = document[e(430)](e(436));
					c.classList.add(e(424)), t(c, x), _[e(457)](c), a[e(428)](x);
				};
			e[$(442)](r), document.body.addEventListener("pointermove", c);
		}
		function _0x5937($, x) {
			let e = _0x2c9e();
			return (_0x5937 = function ($, x) {
				return e[($ -= 419)];
			})($, x);
		}
		!(function ($, x) {
			let e = _0x5937,
				_ = $();
			for (;;)
				try {
					let c =
						(-parseInt(e(434)) / 1) * (parseInt(e(452)) / 2) +
						(-parseInt(e(459)) / 3) * (-parseInt(e(438)) / 4) +
						(-parseInt(e(429)) / 5) * (-parseInt(e(439)) / 6) +
						parseInt(e(435)) / 7 +
						(-parseInt(e(458)) / 8) * (-parseInt(e(437)) / 9) +
						(parseInt(e(421)) / 10) * (parseInt(e(426)) / 11) +
						-parseInt(e(445)) / 12;
					if (897610 === c) break;
					_.push(_.shift());
				} catch (t) {
					_.push(_.shift());
				}
		})(_0x2c9e, 897610),
			lite();
	}
}
