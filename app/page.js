'use client';
import Image from 'next/image';
import Nav from '@/app/ui/nav';
import About from '@/app/ui/about';
import Experience from '@/app/ui/experience';
import Projects from '@/app/ui/projects';
import ContactForm from '@/app/ui/contact-form';
import { ToastContainer } from 'react-toast';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<ToastContainer position={'bottom-right'} />
			<div className={styles.topOrLeft}>
				<Nav />
			</div>
			<div className={styles.bottomOrRight}>
				<About />
				<Experience />
				<Projects />
				<ContactForm />
			</div>
		</main>
	);
}
