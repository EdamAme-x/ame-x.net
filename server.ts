import "zone.js/node";

import { APP_BASE_HREF } from "@angular/common";
import { ngExpressEngine } from "@nguniversal/express-engine";
import * as express from "express";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { cpuUsage, memoryUsage } from "process";
//@ts-ignore
import compression from "compression";

import { AppServerModule } from "./src/main.server";

import * as kv from "./kv";
import { line } from "src/line";

const path = require("path");

const envs = process.env["KV_REST_API_URL"]
	? process.env
	: require("dotenv").config({
			path: path.resolve(__dirname, "../../../.env.development.local")
	  }).parsed;

export function app(): express.Express {
	const server = express();
	const distFolder = join(process.cwd(), "dist/ame-x.net/browser");
	const indexHtml = existsSync(join(distFolder, "index.original.html")) ? "index.original.html" : "index";

	server.engine(
		"html",
		ngExpressEngine({
			bootstrap: AppServerModule
		})
	);

	server.use(compression({ level: 5 }));

	server.set("view engine", "html");
	server.set("views", distFolder);

	server.get(
		"*.*",
		express.static(distFolder, {
			maxAge: "1y"
		})
	);

	server.get("/model/:api_name", async (req, res) => {
		const model = req.params.api_name;
		if (model === "post-fly") {
			const fried_num: string | null = await kv.get("_fried");

			if (!fried_num) {
				await kv.set("_fried", "1");
			} else {
				await kv.set("_fried", (parseInt(fried_num) + 1).toString());
			}

			res.json({
				status: "200",
				message: "OK"
			});
		} else if (model === "get-fly") {
			const fried_num = await kv.get("_fried");

			res.json({
				status: "200",
				message: "OK",
				data: fried_num
			});
		} else if (model === "usage") {
			res.json({
				status: "200",
				message: "OK",
				cpu: cpuUsage().system,
				mem: memoryUsage().rss
			});
		} else if (model.startsWith("line-")) {
			line(req, res, model);
		} else if (model === "articles") {
			const resp = await fetch("https://zenn.dev/api/articles?username=ame_x&order=latest");
			const data = await resp.json();

			res.json({
				status: "200",
				message: "OK",
				data: data.articles
			});
		} else if (model === "zenn-likes") {
			const resp = await fetch("https://zenn.dev/api/articles?username=ame_x&order=latest");
			const data = await resp.json();

			const likes = data.articles.map((x: any) => x.liked_count).reduce((a: number, b: number) => a + b, 0);

			res.json({
				status: "200",
				message: "OK",
				likes
			});
		} else if (model === "rocket-set-" + envs["PASS"]) {
			await kv.set("_fried", (parseInt(req.query.number as string) ?? 10000).toString());

			res.json({
				status: "200",
				message: "OK"
			});
		} else {
			res.json({
				status: "502",
				message: "Not Found API"
			});
		}
	});

	// All regular routes use the Universal engine
	server.get("*", (req, res) => {
		res.setHeader("x-powered-by", "Next.js 99999999;version:9999999");
		res.setHeader("x-development-by", "@amex2189");
		res.render(indexHtml, {
			req,
			providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
		});
	});

	return server;
}

function run(): void {
	const port = process.env["PORT"] || 4000;

	// Start up the Node server
	const server = app();
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || "";
if (moduleFilename === __filename || moduleFilename.includes("iisnode")) {
	run();
}

export * from "./src/main.server";
