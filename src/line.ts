import * as express from "express";
import fetch from "node-fetch";

export function line(req: express.Request, res: express.Response, model: string) {
	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: "Bearer " + decodeURIComponent(req.query.token as string),
		"User-Agent":
			"Mozilla/0 (Android; CPU IOS 810 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E248 Safari Line/13.11.0 LIFF",
		Referer: "https://line-toolbox.f5.si/"
	};

	if ((model = "line-post")) {
		try {
			fetch("https://api.line.me/message/v3/share", {
				method: "POST",
				headers: headers,
				body: JSON.stringify({
					messages: JSON.parse(req.query.content as string)
				})
			})
				.then(r => {
					res.json({
						status: "200",
						message: "OK",
						res: r
					});
				})
				.catch(_e => {});
		} catch (e) {
			res.json({
				status: "401",
				message: "Unauthorized",
				res: "Invalid"
			});
		}
	} else {
		res.json({
			status: "401",
			message: "Unauthorized"
		});
	}
}
