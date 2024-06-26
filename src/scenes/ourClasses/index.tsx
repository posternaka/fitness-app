import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import Class from '@/scenes/ourClasses/Class';
import TitleSection from '@/shared/TitleSection';
import { SelectedPage, SlideType } from '@/shared/types';
import { motion } from 'framer-motion';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const classes: Array<SlideType> = [
	{
		title: 'Weight Training Classes',
		image: image1,
	},
	{
		title: 'Yoga Classes',
		image: image2,
	},
	{
		title: 'Ab Core Classes',
		image: image3,
	},
	{
		title: 'Adventure Classes',
		image: image4,
	},
	{
		title: 'Fitness Classes',
		image: image5,
	},
	{
		title: 'Training Classes',
		image: image6,
	},
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
	return (
		<section className='w-full bg-primary-100 py-4' id='ourclasses'>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
			>
				<motion.div
					className='mx-auto w-5/6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div className='md:w-3/5'>
						<TitleSection>OUR CLASSES</TitleSection>
						<p className='py-5'>
							Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
							tellus quam porttitor. Mauris velit euismod elementum arcu neque
							facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
							enim mattis odio in risus nunc.
						</p>
					</div>
				</motion.div>
				<div className='mt-10 w-full overflow-x-auto overflow-y-hidden'>
					<Swiper spaceBetween={20} slidesPerView={2}>
						{classes.map((it: SlideType, index) => (
							<SwiperSlide>
								<Class
									key={`${it.title + index}`}
									title={it.title}
									description={it.description}
									image={it.image}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</motion.div>
		</section>
	);
};

export default OurClasses;
