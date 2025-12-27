export type Character = {
	slug: string;
	name: string;
	animeSlug: string;
	role: string;
	abilities: string[];
	bio: string;
	avatar: string;
};

export const characterList: Character[] = [
	{
		slug: 'eren-yeager',
		name: 'Eren Yeager',
		animeSlug: 'attack-on-titan',
		role: 'Protagonist',
		abilities: ['Founding Titan', 'Attack Titan'],
		bio: 'Determined to free humanity from the Titans, Eren takes drastic measures to change the world.',
		avatar: '/images/characters/eren.jpg',
	},
	{
		slug: 'mikasa-ackerman',
		name: 'Mikasa Ackerman',
		animeSlug: 'attack-on-titan',
		role: 'Soldier',
		abilities: ['Ackerman combat instincts', 'ODM mastery'],
		bio: 'A top-ranked soldier devoted to protecting Eren and her comrades.',
		avatar: '/images/characters/mikasa.jpg',
	},
	{
		slug: 'yuji-itadori',
		name: 'Yuji Itadori',
		animeSlug: 'jujutsu-kaisen',
		role: 'Protagonist',
		abilities: ['Cursed Energy', 'Divergent Fist'],
		bio: 'A kind-hearted fighter who becomes a vessel for Sukuna and joins Jujutsu High.',
		avatar: '/images/characters/yuji.jpg',
	},
];
