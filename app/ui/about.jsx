import Link from 'next/link';
import styles from '@/app/styles/about.module.css';

export default async function About() {
	return (
		<div className={styles.aboutSection}>
			<h3>About</h3>
			<p>
				Born and raised in Portland, Oregon - I appreciate all that the Pacific Northwest
				has to offer. Whether it's snowboarding on Mt. Hood or hiking through the Columbia
				River Gorge, I love to get out and experience as much as possible.
			</p>
			<p>
				I bring the same disposition to the world of coding. I'm passionate about learning
				new technoglogies, understanding how they work under the hood, and using them
				creatively to produce something new and different.
			</p>
			<p>
				In my free time I play basketball and lacrosse, go snowboarding, fly my drone, and
				dabble in music and video production.
			</p>
		</div>
	);
}
