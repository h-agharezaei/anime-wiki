export type Anime = {
	slug: string;
	title: string;
	year: number;
	genres: string[];
	status: 'ongoing' | 'finished';
	rating: number;
	studio: string;
	summary: string;
	cover: string;
};

export const animeList: Anime[] = [
	{
		slug: 'attack-on-titan',
		title: 'Attack on Titan',
		year: 2013,
		genres: ['Action', 'Drama', 'Fantasy'],
		status: 'finished',
		rating: 9.2,
		studio: 'Wit Studio / MAPPA',
		summary: 'Eren and the Survey Corps fight to uncover the truth behind the Walls and the Titans.',
		cover: '/images/anime/aot.jpg',
	},
	{
		slug: 'jujutsu-kaisen',
		title: 'Jujutsu Kaisen',
		year: 2020,
		genres: ['Action', 'Supernatural'],
		status: 'ongoing',
		rating: 8.8,
		studio: 'MAPPA',
		summary: 'Yuji Itadori joins Tokyo Jujutsu High to battle curses and protect his friends.',
		cover: '/images/anime/jjk.jpg',
	},
	{
		slug: 'one-piece',
		title: 'One Piece',
		year: 1999,
		genres: ['Adventure', 'Fantasy'],
		status: 'ongoing',
		rating: 9.0,
		studio: 'Toei Animation',
		summary: 'Monkey D. Luffy sails with his crew to find the legendary treasure known as the One Piece.',
		cover: '/images/anime/one-piece.jpg',
	},
];
