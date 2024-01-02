import styles from '@/app/ui/experience.module.css';

export default function ContactForm() {
	return (
		<form className='container'>
			<h1>Get in touch</h1>
			<div className='email block'>
				<label htmlFor='frm-email'>Email</label>
				<input id='frm-email' type='email' name='email' autoComplete='email' required />
			</div>
			<div className='name block'>
				<div>
					<label htmlFor='frm-name'>Name</label>
					<input id='frm-name' type='text' name='name' autoComplete='name' required />
				</div>
			</div>
			<div className='message block'>
				<label htmlFor='frm-message'>Message</label>
				<textarea id='frm-message' rows='6' name='message'></textarea>
			</div>
			<div className='button block'>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
}
