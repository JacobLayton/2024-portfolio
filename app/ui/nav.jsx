'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/nav.module.css';
import { LinkedInSVG, GitHubSVG, InstagramSVG } from '../../public/SVGIcons';

// const links = [
// 	{ name: 'About', href: '/dashboard', icon: HomeIcon },
// 	{
// 		name: 'Projects',
// 		href: '/dashboard/invoices',
// 		icon: DocumentDuplicateIcon,
// 	},
// 	{ name: 'Contact', href: '/dashboard/customers', icon: UserGroupIcon },
// ];

export default function Nav() {
	const [activeLink, updateActiveLink] = React.useState('about');
	function handleClick(section) {
		updateActiveLink(section);
	}
	React.useEffect(() => {
		const sectionIds = ['about', 'experience', 'projects', 'contact'];
		const threshold = 200; // highlight sooner
		const bottomOffset = 100; // px from bottom to force 'contact'
		const handleScroll = () => {
			const scrollPosition = window.innerHeight + window.scrollY;
			const pageHeight = document.body.offsetHeight;
			// If near bottom, always highlight contact
			if (pageHeight - scrollPosition < bottomOffset) {
				updateActiveLink('contact');
				return;
			}
			let found = false;
			for (let i = sectionIds.length - 1; i >= 0; i--) {
				const section = document.getElementById(sectionIds[i]);
				if (section) {
					const rect = section.getBoundingClientRect();
					if (rect.top <= threshold) {
						updateActiveLink(sectionIds[i]);
						found = true;
						break;
					}
				}
			}
			if (!found) updateActiveLink(sectionIds[0]);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<div className={styles.nav}>
			<div className={styles.infoAndLinks}>
				<div className={styles.nameAndTitle}>
					<h1>Jacob Layton</h1>
					<h2>Full Stack Web Developer</h2>
					<p>I build applications aimed at solving real world problems.</p>
				</div>
				<div className={styles.navLinks}>
					<div
						className={`${styles.navLink} ${
							activeLink === 'about' ? styles.activeLink : ''
						}`}
					>
						<Link href={'#about'}>
							<h3 onClick={() => handleClick('about')}>About</h3>
						</Link>
					</div>
					<div
						className={`${styles.navLink} ${
							activeLink === 'experience' ? styles.activeLink : ''
						}`}
					>
						<Link href={'#experience'}>
							<h3 onClick={() => handleClick('experience')}>Experience</h3>
						</Link>
					</div>
					<div
						className={`${styles.navLink} ${
							activeLink === 'projects' ? styles.activeLink : ''
						}`}
					>
						<Link href={'#projects'}>
							<h3 onClick={() => handleClick('projects')}>Projects</h3>
						</Link>
					</div>
					<div
						className={`${styles.navLink} ${
							activeLink === 'contact' ? styles.activeLink : ''
						}`}
					>
						<Link href={'#contact'}>
							<h3 onClick={() => handleClick('contact')}>Contact</h3>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.icons}>
				<a
					href='https://www.linkedin.com/in/jacob-layton/'
					target='_blank'
					rel='noopener noreferrer'
				>
					{LinkedInSVG}
				</a>
				<a href='https://github.com/JacobLayton' target='_blank' rel='noopener noreferrer'>
					{GitHubSVG}
				</a>
				<a
					href='https://www.instagram.com/jlayallday/'
					target='_blank'
					rel='noopener noreferrer'
				>
					{InstagramSVG}
				</a>
			</div>
		</div>
	);
}
