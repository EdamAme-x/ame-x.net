import { Injectable } from '@angular/core';

export type Career = {
	title: string;
	color: `#${string}`;
	desc: string;
	date: `${string} / ${string}`;
	url?: `https://${string}`;
};

@Injectable({
	providedIn: 'root'
})
export class CareerService {
	protected careers: Career[] = [
		{
			title: 'Create LINE Tool',
			color: '#88ff88',
			desc: `
    Create LINE Tool
    We created a tool that works on Open Chat, Talk, Groups.
    The number of users reached 5,000 per day.
    `,
			date: '2023 / 9',
			url: 'https://github.com/EdamAme-x/line-tool-box'
		},
		{
			title: 'My article has trended multiple times on zenn.',
			color: '#8888ff',
			desc: `
      It has received high praise in various articles.
    `,
			date: '2023 / 10',
			url: 'https://zenn.dev/ame_x/articles/'
		},
		{
			title: "Created the world's first generic self-bot for LINE OpenChat",
			color: '#8888ff',
			desc: `
      Created the world's first generic self-bot for LINE OpenChat.
      Please DM me if you have any questions.
    `,
			date: '2023 / 11',
			url: 'https://twitter.com/amex2189'
		}
	];

	getCareers() {
		return this.careers;
	}

	constructor() {}
}
