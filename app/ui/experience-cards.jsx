'use client';

import Link from 'next/link';
import Badge from '@/app/ui/badge';
import { LaunchSVG } from '../../public/SVGIcons';
import styles from '@/app/styles/experience.module.css';

export default function ExperienceCards(props) {
	const { techStack } = props.experience;
	const url = props.experience.url;
	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className={styles.experienceCard}
			style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
		>
			<div className={styles.tabletUpLeft}>
				<h4 className={styles.experienceDates}>{props.experience.dates}</h4>
			</div>
			<div className={styles.tabletUpRight}>
				<div className={styles.experienceCardTitle}>
					<h4 className={styles.position}>{props.experience.positionOne}</h4>
					{LaunchSVG}
				</div>
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
		</a>
	);
}
