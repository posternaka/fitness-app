import Benefits from '@/scenes/benefits';
import Home from '@/scenes/home';
import Navbar from '@/scenes/navbar';
import OurClasses from '@/scenes/ourClasses';
import { SelectedPage } from '@/shared/types';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) {
				setIsTopOfPage(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className='app bg-gray-20'>
			<motion.div
				className='fixed top-0 bottom-0 left-0 right-0 origin-left h-2.5  bg-progress-bar z-40'
				style={{ scaleX }}
			></motion.div>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<OurClasses setSelectedPage={setSelectedPage} />
		</div>
	);
}

export default App;
