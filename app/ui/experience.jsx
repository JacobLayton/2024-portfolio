'use client';

import Link from 'next/link';
import ExperienceCards from '@/app/ui/experience-cards';
import styles from '@/app/styles/experience.module.css';

const experienceData = [
	{
		dates: '2020 - PRESENT',
		positionOne: 'Team Lead - CaseIQ',
		positionThree: 'Software Developer',
		jobDescription:
			'Lead a team of 4 developers and 2 business analysts focused on upgrading existing clients to the newest version of our product. This involves rewriting or removing custom features where possible, data migrations, and compaitibilty troubleshooting.',
		techStack: ['Javascript', 'Backbone', 'Node', 'PostgreSQL', 'Docker', 'Yellowfin'],
	},
	{
		dates: '2019',
		positionOne: 'Team Lead - BloomTech',
		jobDescription:
			'BloomTech is a coding bootcamp at which I supervised 120 students and 14 project managers while they worked through the curriculum. I assisted instructors in teaching and reviewing lessons, as well as lead daily whiteboard solutions with the cohort.',
		techStack: ['Javascript', 'React', 'Node'],
	},
];

export default function Experience() {
	return (
		<div className={styles.experienceContainer}>
			<h3>Experience</h3>
			{experienceData.map((job, index) => {
				return <ExperienceCards key={index} experience={job} />;
			})}
		</div>
	);
}
