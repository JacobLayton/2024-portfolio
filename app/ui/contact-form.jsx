import styles from '@/app/styles/contact-form.module.css';

export default function ContactForm() {
	return (
		<form className={styles.formContainer} id='contact'>
			<h3>Get in touch</h3>
			<div className={styles.fieldContainer}>
				<div className={styles.field}>
					<label htmlFor='frm-email'>Email</label>
					<input id='frm-email' type='email' name='email' autoComplete='email' required />
				</div>
				<div className={`${styles.field} ${styles.name}`}>
					<div>
						<label htmlFor='frm-name'>Name</label>
						<input id='frm-name' type='text' name='name' autoComplete='name' required />
					</div>
				</div>
				<div className={styles.field}>
					<label htmlFor='frm-message'>Message</label>
					<textarea id='frm-message' rows='6' name='message'></textarea>
				</div>
				<div className={`${styles.field} ${styles.submitButton}`}>
					<button type='submit'>SEND</button>
				</div>
			</div>
		</form>
	);
}
