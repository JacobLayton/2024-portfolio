'use client';

import Link from 'next/link';
import Badge from '@/app/ui/badge';
import styles from '@/app/styles/experience.module.css';

export default function ExperienceCards(props) {
	const { techStack } = props.experience;
	return (
		<div className={styles.experienceCard}>
			<h4 className={styles.experienceDates}>{props.experience.dates}</h4>
			<h4 className={styles.position}>{props.experience.positionOne}</h4>
			{props.experience.positionTwo ? (
				<h4 className={styles.previousPosition}>{props.experience.positionTwo}</h4>
			) : null}
			{props.experience.positionThree ? (
				<h4 className={styles.previousPosition}>{props.experience.positionThree}</h4>
			) : null}
			<p>{props.experience.jobDescription}</p>
			<div className={styles.experienceTechStack}>
				{techStack.map((item, index) => {
					return <Badge key={index} techItem={item} />;
				})}
			</div>
		</div>
	);
}
