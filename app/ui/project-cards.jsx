'use client';

import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/app/ui/badge';
import { LaunchSVG } from '../../public/SVGIcons';
import styles from '@/app/styles/projects.module.css';
import { toast, cssTransition } from 'react-toastify';

const slideTransition = cssTransition({
	enter: 'toast-slide-in',
	exit: 'toast-slide-out',
	duration: [300, 300],
});

export default function ProjectCards(props) {
	const { techStack } = props.project;
	const url = props.project.url;

	function handleCardClick(e) {
		e.preventDefault();
		if (url) {
			window.open(url, '_blank', 'noopener,noreferrer');
		} else {
			toast.info('This tool is only accessible to BloomTech faculty and students.', {
				toastId: 'deadLink',
				position: 'bottom-right',
				autoClose: 3000,
				hideProgressBar: true,
				transition: slideTransition,
				style: {
					background: 'var(--color-pop-solid)',
					color: 'var(--background-color)',
					borderRadius: '15px',
					fontFamily: 'var(--font-mulish)',
				},
				className: styles.deadLinkToast,
			});
		}
	}

	return (
		<div
			onClick={handleCardClick}
			className={styles.projectCard}
			style={{ cursor: 'pointer' }}
			role='button'
			tabIndex={0}
			onKeyPress={(e) => {
				if (e.key === 'Enter' || e.key === ' ') handleCardClick(e);
			}}
		>
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
