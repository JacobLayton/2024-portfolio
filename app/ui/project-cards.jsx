'use client';

import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/app/ui/badge';
import { LaunchSVG } from '../../public/SVGIcons';
import styles from '@/app/styles/projects.module.css';

export default function ProjectCards(props) {
	const { techStack } = props.project;
	return (
		<div className={styles.projectCard}>
			<div className={styles.tabletUpLeft}>
				<div className='projectCardImage'>
					<Image
						src={props.project.image}
						width={200}
						height={114.25}
						quality={100}
						alt={props.project.altText}
						style={{
							width: '85%',
							height: 'auto',
							borderRadius: '0.25rem',
						}}
					/>
				</div>
			</div>
			<div className={styles.tabletUpRight}>
				<div className={styles.projectCardTitle}>
					<h4>{props.project.title}</h4>
					{LaunchSVG}
				</div>
				<p>{props.project.description}</p>
				<div className={styles.projectCardImageMobile}>
					<Image
						src={props.project.image}
						width={200}
						height={114.25}
						quality={100}
						alt={props.project.altText}
						style={{
							width: '200px',
							height: 'auto',
							borderRadius: '0.25rem',
						}}
					/>
				</div>
				<div className={styles.projectTechStack}>
					{techStack.map((item, index) => {
						return <Badge key={index} techItem={item} />;
					})}
				</div>
			</div>
		</div>
	);
}
