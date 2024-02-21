'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/nav.module.css';

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
				<a href='https://github.com/JacobLayton' target='_blank' rel='noopener noreferrer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='100'
						height='100'
						viewBox='0 0 30 30'
					>
						<path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
					</svg>
				</a>
				<a
					href='https://www.instagram.com/jlayallday/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='100'
						height='100'
						viewBox='0 0 32 32'
					>
						<path d='M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z'></path>
					</svg>
				</a>
				<a
					href='https://www.linkedin.com/in/jacob-layton/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='100'
						height='100'
						viewBox='0 0 30 30'
					>
						<path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z'></path>
					</svg>
				</a>
			</div>
		</div>
	);
}
