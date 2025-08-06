import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from "./section-heading/SectionHeading";
import { sectionVariants } from '../utils/animationVariants';
import instagram from "../images/social-links/instagram.svg";

/**
 * The **Footer** component representing the footer socials links and contacts.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 */
function Footer({ data }) {
	const { email, address, social, activeInCountries, planningToBeActiveInCountries } = data;

	// Classes for JSX Elements
	const footerSectionClass = `bg-primary text-secondary-100 pt-[80px] pb-[60px] sm:pt-[60px]`;
	const footerSectionContainerClass = `box-border mx-auto max-w-[1440px] max-h-[512px] px-[80px] 
		grid overflow-hidden grid-cols-3 grid-rows-2 gap-px 
		xl:h-[662px] xl:grid-cols-2 xl:grid-rows-3 
		md:px-[60px] md:max-h-[850px] md:grid-cols-1 md:auto-rows-max 
		sm:px-[16px]`;

	return (
		<motion.footer
			id="footer"
			className={footerSectionClass}
			variants={sectionVariants}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.2 }}>
			<div className={footerSectionContainerClass}>
				<div className="min-w-full min-h-full md:row-start-1 md:col-start-1">
					<SectionHeading align="left" color="secondary">
						Let's get in touch
					</SectionHeading>
					<p className="py-[40px] md:pt-[30px] md:pb-[20px]">
						{email}
					</p>
					<address className="text-sm not-italic leading-4">
						Address: {address.line1}<br/>{address.line2} {address.country} {address.postcode}
					</address>
				</div>
				<div className="min-w-full min-h-full pl-[50px] xl:pl-[0px] xl:pt-[80px] 
						xl:row-start-2 xl:col-start-1 md:row-start-3 md:pt-[0px]">
					<div className="md:pt-[50px]">
						<SectionHeading align="left" color="secondary">
							Follow us
						</SectionHeading>
					</div>
					<a className="py-[40px] md:py-[30px] flex items-center gap-x-[17px]" href="https://www.instagram.com">
						<img className="w-[24px] h-[24px]" src={instagram} alt="instagram page of Al-khamayseh Beverage company" />
						{social.instagram}
					</a>
				</div>
				<div className="min-w-full min-h-full row-span-2 xl:row-start-1 xl:col-start-2 
						md:row-start-2 md:col-start-1 md:row-span-1">
					<SectionHeading align="left" color="secondary">
						Where we work
					</SectionHeading>
					<p className="py-[40px] md:pt-[30px] md:pb-[20px]">
						We currently operate in:<br />{activeInCountries}
					</p>
					<p className="max-w-[386px]">
						Planning to launch soon in :<br />
						{planningToBeActiveInCountries}
					</p>
				</div>
				<div className="min-w-full min-h-full col-span-2 flex items-end md:row-start-4 
						md:col-start-1 md:col-span-1">
					<div className="flex justify-between gap-x-[40px] md:flex-col md:gap-y-[16px]">
						<p className="text-sm leading-4">Awesome Container Company © {new Date().getFullYear()}</p>
						<p className="text-sm leading-4">Terms of Use</p>
					</div>
				</div>
			</div>
		</motion.footer>
	);
}

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Footer;
