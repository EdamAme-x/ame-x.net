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

        //@ts-ignore
        function _0x2c9e() {
            const _0x26c041 = [
                "--opacity:\x201;\x20--x:\x20",
                "px;\x20--y:",
                "7342730dWXUeQ",
                "height",
                "[cards-raw]\x20.overlay",
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
                "[cards-raw]\x20.cards",
                "offsetTop",
                "35873880SVdyed",
                "currentTarget",
                "pageY",
                "[cards-raw]\x20.card",
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
            _0x2c9e = function () {
                return _0x26c041;
            };
            return _0x2c9e();
        }
        const _0x2b2586 = _0x5937;
        (function (_0x30107b, _0x39731b) {
            const _0x2126a3 = _0x5937,
                _0x1db83 = _0x30107b();
            while (!![]) {
                try {
                    const _0xf15b08 =
                        (-parseInt(_0x2126a3(0x1b2)) / 0x1) * (parseInt(_0x2126a3(0x1c4)) / 0x2) +
                        (-parseInt(_0x2126a3(0x1cb)) / 0x3) * (-parseInt(_0x2126a3(0x1b6)) / 0x4) +
                        (-parseInt(_0x2126a3(0x1ad)) / 0x5) * (-parseInt(_0x2126a3(0x1b7)) / 0x6) +
                        parseInt(_0x2126a3(0x1b3)) / 0x7 +
                        (-parseInt(_0x2126a3(0x1ca)) / 0x8) * (-parseInt(_0x2126a3(0x1b5)) / 0x9) +
                        (parseInt(_0x2126a3(0x1a5)) / 0xa) * (parseInt(_0x2126a3(0x1aa)) / 0xb) +
                        -parseInt(_0x2126a3(0x1bd)) / 0xc;
                    if (_0xf15b08 === _0x39731b) break;
                    else _0x1db83["push"](_0x1db83["shift"]());
                } catch (_0x249ff8) {
                    _0x1db83["push"](_0x1db83["shift"]());
                }
            }
        })(_0x2c9e, 0xdb24a);
        function lite() {
            const _0x4c476b = _0x5937;
            let _0x353204 = document[_0x4c476b(0x1c8)](_0x4c476b(0x1bb)),
                _0x50c17c = Array["from"](document["querySelectorAll"](_0x4c476b(0x1c0))),
                _0x51cdc9 = document["querySelector"](_0x4c476b(0x1a7)),
                _0x4cbbe1 = _0x2f5278 => {
                    const _0x51af4e = _0x4c476b;
                    if (!document[_0x51af4e(0x1c8)](_0x51af4e(0x1c3))) return 0x0;
                    let _0x19119e = _0x2f5278[_0x51af4e(0x1be)],
                        _0x116bfe = _0x2f5278["pageX"] - _0x353204["offsetLeft"],
                        _0x394c1e = _0x2f5278[_0x51af4e(0x1bf)] - _0x353204[_0x51af4e(0x1bc)];
                    _0x19119e[_0x51af4e(0x1c2)] =
                        _0x51af4e(0x1a3) + _0x116bfe + _0x51af4e(0x1a4) + _0x394c1e + _0x51af4e(0x1c5);
                },
                _0x3c08cd = (_0x20cc6a, _0x346ca1) => {
                    const _0x228985 = _0x4c476b;
                    let _0x24e47c = document[_0x228985(0x1ae)](_0x228985(0x1b4));
                    _0x24e47c["classList"][_0x228985(0x1c6)](_0x228985(0x1b1)),
                        (_0x24e47c[_0x228985(0x1c1)] = _0x346ca1[_0x228985(0x1af)]),
                        _0x20cc6a[_0x228985(0x1c9)](_0x24e47c);
                },
                _0x2d407a = new ResizeObserver(_0x443c38 => {
                    const _0x50e978 = _0x4c476b;
                    _0x443c38[_0x50e978(0x1ba)](_0x29f8e8 => {
                        const _0xebd25d = _0x50e978;
                        let _0x38c44d = _0x50c17c["indexOf"](_0x29f8e8[_0xebd25d(0x1a9)]),
                            _0x560913 = _0x29f8e8[_0xebd25d(0x1b0)][0x0][_0xebd25d(0x1b8)],
                            _0x1282b8 = _0x29f8e8["borderBoxSize"][0x0][_0xebd25d(0x1cd)];
                        _0x38c44d >= 0x0 &&
                            ((_0x51cdc9[_0xebd25d(0x1c7)][_0x38c44d][_0xebd25d(0x1c7)][0x0][_0xebd25d(0x1c2)][
                                _0xebd25d(0x1ab)
                            ] = _0x560913 + "px"),
                            (_0x51cdc9[_0xebd25d(0x1c7)][_0x38c44d][_0xebd25d(0x1c7)][0x0][_0xebd25d(0x1c2)][
                                _0xebd25d(0x1a6)
                            ] = _0x1282b8 + "px"),
                            (_0x51cdc9["children"][_0x38c44d][_0xebd25d(0x1c7)][0x0][_0xebd25d(0x1c7)][0x0][
                                _0xebd25d(0x1c7)
                            ][0x3]["style"][_0xebd25d(0x1cc)] = "0"));
                    });
                }),
                _0x254c12 = _0x1432d0 => {
                    const _0x34619d = _0x4c476b;
                    let _0x4b19a4 = document[_0x34619d(0x1ae)](_0x34619d(0x1b4));
                    _0x4b19a4["classList"]["add"](_0x34619d(0x1a8)),
                        _0x3c08cd(_0x4b19a4, _0x1432d0),
                        _0x51cdc9[_0x34619d(0x1c9)](_0x4b19a4),
                        _0x2d407a[_0x34619d(0x1ac)](_0x1432d0);
                };
            _0x50c17c[_0x4c476b(0x1ba)](_0x254c12), document["body"]["addEventListener"]("pointermove", _0x4cbbe1);
        }
        function _0x5937(_0x2f5b55, _0x31765d) {
            const _0x2c9e0f = _0x2c9e();
            return (
                (_0x5937 = function (_0x59371e, _0x26241a) {
                    _0x59371e = _0x59371e - 0x1a3;
                    let _0x2b6880 = _0x2c9e0f[_0x59371e];
                    return _0x2b6880;
                }),
                _0x5937(_0x2f5b55, _0x31765d)
            );
        }
        lite();
    }
}
