import { SlideType } from '@/shared/types';

const Class = ({ title, description, image }: SlideType) => {
	const overlayStyles = `p-5 absolute z-30 flex h-full w-full flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

	return (
		<div className='relative mx-5 inline-block '>
			<div className={overlayStyles}>
				<p className='md:text-2xl'>{title}</p>
				<p className='mt-5'>{description}</p>
			</div>
			<img src={image} alt={`${title}-${image}`} />
		</div>
	);
};

export default Class;
