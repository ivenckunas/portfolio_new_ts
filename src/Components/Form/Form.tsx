import './form.css';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Form() {
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	const sendEmail = (formData: Record<string, unknown> | undefined) => {
		console.log('formData ===', formData);
		emailjs.send('service_lnx78oi', 'template_zti9zb3', formData, 'A-AhpOA7SuLIL14tc').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
				console.log(errors);
			}
		);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(sendEmail)}>
			<h2 className='p-2 pl-0 border-y-[1px] border-black mb-4'>msg</h2>
			<input
				className='name-input'
				type='text'
				placeholder='name'
				{...register('name', {required: true})}
			/>
			<input
				className='email-input'
				type='email'
				placeholder='email'
				{...register('from_email', {required: true})}
			/>
			<textarea
				className='msg-textarea'
				placeholder='message'
				{...register('message', {required: true})}
			/>

			<input
				className='submit-btn'
				type='submit'
			/>
		</form>
	);
}
