'use client';

import { useState } from 'react';
import styles from '@/app/styles/contact-form.module.css';
import { toast, cssTransition } from 'react-toastify';

const slideTransition = cssTransition({
	enter: 'toast-slide-in',
	exit: 'toast-slide-out',
	duration: [300, 300],
});

export default function ContactForm() {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	function handleSubmitClick(e) {
		e.preventDefault();

		// Check for missing required fields
		const missingFields = Object.entries(formData)
			.filter(([_, value]) => !value)
			.map(([field]) => field.charAt(0).toUpperCase() + field.slice(1))
			.join(', ');

		if (missingFields) {
			toast.error(
				`To submit the form, please fill out the following field${
					missingFields?.length > 7 ? 's' : ''
				}: ${missingFields}`,
				{
					toastId: 'error',
					position: 'bottom-right',
					autoClose: 3000,
					hideProgressBar: true,
					transition: slideTransition,
					style: {
						background: 'var(--color-pop-solid)',
						color: 'var(--background-color)',
						borderRadius: '15px',
					},
					className: styles.errorLinkToast,
				}
			);
			return;
		}

		toast.success('Thank you! Your message has been sent.', {
			toastId: 'success',
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: true,
			transition: slideTransition,
			style: {
				background: 'var(--color-pop-solid)',
				color: 'var(--background-color)',
				borderRadius: '15px',
			},
			className: styles.successLinkToast,
		});

		// Reset form
		setFormData({
			email: '',
			name: '',
			message: '',
		});
	}

	return (
		<form className={styles.formContainer} id='contact' onSubmit={handleSubmitClick} noValidate>
			<h3>Get in touch</h3>
			<div className={styles.fieldContainer}>
				<div className={styles.field}>
					<label htmlFor='frm-email'>Email</label>
					<input
						id='frm-email'
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						autoComplete='email'
					/>
				</div>
				<div className={`${styles.field} ${styles.name}`}>
					<label htmlFor='frm-name'>Name</label>
					<input
						id='frm-name'
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						autoComplete='name'
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor='frm-message'>Message</label>
					<textarea
						id='frm-message'
						rows='6'
						name='message'
						value={formData.message}
						onChange={handleChange}
					></textarea>
				</div>
				<div className={`${styles.field} ${styles.submitButton}`}>
					<button type='submit'>SEND</button>
				</div>
			</div>
		</form>
	);
}
