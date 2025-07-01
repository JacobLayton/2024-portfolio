'use client';

import Link from 'next/link';
import ProjectCards from '@/app/ui/project-cards';
import styles from '@/app/styles/projects.module.css';

const projectData = [
	{
		title: 'Giraft.io',
		description:
			'Giraft is a Web3 sports betting platform that allows users to wager crypto on a wide range of markets using any chain they prefer. As a founding developer on this project I take great pride in the intuitive UI and the reliability of the application.',
		image: '/giraft-logo.png',
		altText: 'Giraft sports logo',
		techStack: [
			'Typescript',
			'Next.js',
			'Web3',
			'GraphQL',
			'Privy',
			'Azuro',
			'Tailwind',
			'Shadcn',
		],
		launchUrl: 'https://giraft.io/',
	},
	{
		title: 'Bookmaps',
		description:
			'BookMaps is a free P2P book-sharing web app which enables users to safely lend and borrow books with people near them. It serves as a great way for people who may not have access to a library or bookstore to explore new books and expand their knowledge.',
		image: '/bookmaps-tablet.jpg',
		altText: 'Screenshot of dashboard showing tablet version',
		techStack: ['Javascript', 'React', 'Redux', 'Node', 'Google Maps', 'Goodreads', 'Stripe'],
	},
	{
		title: 'Curriculum Bot',
		description:
			"Curriculum Bot is a useful tool for students at BloomTech to easily find the module they're looking for. This project includes a search engine built in Python which uses Natural Language Processing to find matches to keywords in the user's search. We created a second backend using Node.js to handle a Slackbot, which enabled students to use the search functionality directly from our main slack channel",
		image: '/tkbot-full.jpg',
		altText: 'Screenshot of dashboard showing desktop version',
		techStack: ['Javascript', 'React', 'Node', 'Python', 'HTML', 'CSS'],
	},
];

export default function Projects() {
	return (
		<div className={styles.projectsContainer} id='projects'>
			<div className={styles.titleScroll}>
				<h3>Projects</h3>
			</div>
			{projectData.map((project, index) => {
				return <ProjectCards key={index} project={project} />;
			})}
		</div>
	);
}
