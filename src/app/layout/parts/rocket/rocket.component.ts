import { Component } from "@angular/core";

@Component({
    selector: "LayoutPartsRocket",
    templateUrl: "./rocket.component.html",
    styleUrls: ["./rocket.component.scss"]
})
export class RocketComponent {
    fired: number = 0;

    async firing() {
        // add & refresh fried
        await fetch("/model/post-fly?key=" + Math.random().toString(16), {});

        this.fired++;
        // @ts-ignore
        window.fried = this.fired;

        this.supply();
    }

    supply() {
        let endWithPrefix = "th";

        if (this.fired % 10 === 0 && this.fired % 100 !== 0) {
            //@ts-ignore
            new window.swal({
                title: `
        You are the one who fired the ${this.fired}${endWithPrefix} rocket! 
        Congratulations!🎊`,
                icon: "success"
            });
        } else if (this.fired % 100 === 0) {
            //@ts-ignore
            new window.swal({
                title: `
        You are the one who fired the ${this.fired}${endWithPrefix} rocket! 
        Congratulations!🎊
        Show @amex2189 a screencap of this screen and see.
        `,
                icon: "success"
            });
        }
    }

    ngOnInit() {
        // @ts-ignore
        if (typeof window === "undefined" || window._after_fried_get === "end") {
            // @ts-ignore
            if (typeof windo !== "undefined") {
                // @ts-ignore
                if (typeof window.fried == "number") {
                    // @ts-ignore
                    this.fired = window.fried + 1;
                    this.firing();
                }
            }
            return;
        }

        //@ts-ignore
        if (!window.swal) {
            // @ts-ignore
            Function(`
        import("https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/+esm").then(
          (x) => {
            window.swal = x.default;
          }
        )

        document.head.innerHTML += \`
        <style swal-style>
          .swal2-title {
            font-size: 1rem;
          }        
        </style>
        \`
      `)();
        }

        fetch("/model/get-fly?key=" + Math.random().toString(16), {})
            .then(res => res.json())
            .then(d => {
                if (parseInt(d.data).toString() === "NaN") {
                    this.fired = parseInt(Date.now().toString().slice(-5));
                } else {
                    this.fired = parseInt(d.data);
                    fetch("/model/post-fly?key=" + Math.random().toString(16)).then(() => {
                        this.fired++;
                    });

                    fetch("model/zenn-likes?key=" + Math.random().toString(16))
                        .then(res => res.json())
                        .then(data => {
                            this.fired += data.likes;

                            //@ts-ignore
                            window.fried = this.fired;
                        });

                    //@ts-ignore
                    window._after_fried_get = "end";
                }
            });
    }
}
