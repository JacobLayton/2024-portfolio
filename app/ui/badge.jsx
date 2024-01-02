'use client';

import Link from 'next/link';
import styles from '@/app/ui/badge.module.css';

export default function Badge(props) {
	return (
		<div className={styles.badgeContainer}>
			<span>{props.techItem}</span>
		</div>
	);
}
