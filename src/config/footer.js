import { twitterIcon, youtubeIcon, githubIcon, instagramIcon } from "../icons/icons";


export const footerSocials = [
  {
    url: 'https://instagram.com/thomcrowe',
    icon: instagramIcon,
  },
  {
    url: 'https://twitter.com/thomcrowe',
    icon: twitterIcon,
  },
  {
    url: 'https://github.com/thomcrowe',
    icon: githubIcon,
  },
]

export const footerLists = [

	{
		title: 'Stuff from Thom',
		items: [
			{
				title: 'About',
				slug: '/about',
			},
			{
				title: 'Blog',
				slug: '/blog',
			},
			{
				title: 'Contact',
				slug: '/contact',
			},
		],
	},
	{
		title: 'Links',
		items: [
			{
				title: 'Tis the Podcast',
				slug: 'https://linktr.ee/tisthepodcast',
			},
			{
				title: 'Once Every Two Weeks',
				slug: 'https://onceeverytwoweeks.com/',
			},
			{
				title: 'Anglo-Orthodox',
				slug: 'https://angloorthodox.com/',
			},
		],
	},
];
