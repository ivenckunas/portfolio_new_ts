import {useForm} from 'react-hook-form';
import type {FieldValues} from 'react-hook-form';

function Form() {
	const {
		register,
		handleSubmit,
		formState: {isSubmitting},
		reset,
	} = useForm();

	const onSubmit = async (data: FieldValues) => {
		console.log('data ===', data);
		await new Promise((resolve) => setTimeout(resolve, 1000));

		reset();
	};

	return (
		<div className='flex flex-col p-2 lg:pt-4 pl-0 text-xs lg:text-sm'>
			<h2 className='my-2 text-md'>send me a message</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', {required: 'Name is required'})}
					className='bg-transparent placeholder-black outline-0'
					type='text'
					placeholder='name'
				/>
				<input
					{...register('email', {required: 'Email is required'})}
					className='bg-transparent placeholder-black outline-0'
					type='email'
					placeholder='email'
				/>
				<input
					{...register('message', {required: 'Enter your message'})}
					className='bg-transparent placeholder-black outline-0'
					type='text'
					placeholder='message'
					id=''
				/>
				<button
					disabled={isSubmitting}
					type='submit'
				>
					send
				</button>
			</form>
		</div>
	);
}

export default Form;
