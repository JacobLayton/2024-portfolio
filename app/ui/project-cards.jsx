'use client';

import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/app/ui/badge';
import styles from '@/app/ui/projects.module.css';

export default function ProjectCards(props) {
	const { techStack } = props.project;
	return (
		<div className={styles.projectCard}>
			<h4>{props.project.title}</h4>
			<h4>{props.project.description}</h4>
			<div className='projectCardImage'>
				<Image
					src={props.project.image}
					// className='projectCardImage'
					width={200}
					height={114.25}
					quality={100}
					alt={props.project.altText}
					style={{ width: '200px', height: 'auto' }}
				/>
			</div>
			<div className={styles.projectTechStack}>
				{techStack.map((item, index) => {
					return <Badge key={index} techItem={item} />;
				})}
			</div>
		</div>
	);
}
