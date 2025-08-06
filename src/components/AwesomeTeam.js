// import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading/SectionHeading';
import { sectionVariants } from '../utils/animationVariants';
import linkedInImg from '../images/social-links/linkedin.svg';

/**
 * The **AwesomeTeam** component representing the list of team members of the company.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 */
function AwesomeTeam({ data }) {
	const { title, members } = data;

	const renderImages = () => {
		// Function to render the images of team members
		return members.map(({ name, title, linkedIn, image }, index) => {
			return (
				<figure className="max-w-[146px]" key={index}>
					<img src={image} alt={image} className="object-cover w-[146px] h-[146px]" />
					<figcaption className="pt-[15px] text-2xl sec-text-primary leading-7 text-center">
						{name}
						<span className="block whitespace-nowrap">{title}</span>
						<a href={linkedIn}>
							<img src={linkedInImg} alt={name} className="mx-[auto] mt-[20px]" />
						</a>
					</figcaption>
				</figure>
			);
		});
	};

	return (
		<motion.section
			id="awesome-team"
			aria-label="team"
			className="pt-[180px] md:pt-[120px] sm:px-[16px]"
			variants={sectionVariants}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.2 }}>
			<SectionHeading align="center" color="primary">
				{title}
			</SectionHeading>
			<div className="mx-auto pt-[80px] max-w-[746px] md:pt-[44px]">
				<div className="w-full flex justify-between md:flex-col md:items-center md:gap-y-[44px]">
					{renderImages()}
				</div>
			</div>
		</motion.section>
	);
}

AwesomeTeam.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AwesomeTeam;