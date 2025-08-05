'use client';

import Link from 'next/link';
import ExperienceCards from '@/app/ui/experience-cards';
import styles from '@/app/styles/experience.module.css';

const experienceData = [
	{
		dates: '2020 - Present',
		positionOne: 'Platform Team Lead · Case IQ',
		positionTwo: 'Upgrade Development Manager',
		positionThree: 'Professional Services Team Lead',
		jobDescription:
			'All of my positions at Case IQ have been Software Development focused with varying degrees of leadership. On the platform team we focus on delivering robust, high quality, immediately usable application features by applying Scrum methodology.',
		techStack: ['Javascript', 'Backbone', 'Node', 'PostgreSQL', 'Docker', 'Yellowfin'],
		url: 'https://caseiq.com',
	},
	{
		dates: '2018 - 2019',
		positionOne: 'Team Lead · BloomTech',
		jobDescription:
			'BloomTech is a coding bootcamp at which I supervised 120 students and 14 project managers while they worked through the curriculum. I assisted instructors in teaching and reviewing lessons, as well as lead daily whiteboard solutions with the cohort.',
		techStack: ['Javascript', 'React', 'Node'],
		url: 'https://www.bloomtech.com',
	},
];

export default function Experience() {
	return (
		<div className={styles.experienceContainer} id='experience'>
			<div className={styles.titleScroll}>
				<h3>Experience</h3>
			</div>
			{experienceData.map((job, index) => {
				return <ExperienceCards key={index} experience={job} />;
			})}
		</div>
	);
}
